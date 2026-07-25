require("dotenv").config();
const { MongoClient } = require("mongodb");

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) return cachedClient;
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  cachedClient = await client.connect();
  return cachedClient;
}

exports.handler = async function (event, context) {
  // Nur POST zulassen
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
      },
      body: JSON.stringify({ message: "Nur POST erlaubt" }),
    };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ message: "Ungültiges JSON" }),
    };
  }

  const { name, text, stars } = data;

  // Validierung
  if (!name || !text || !stars) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ message: "Name, Text und Sterne sind erforderlich." }),
    };
  }

  const starsInt = parseInt(stars);
  if (isNaN(starsInt) || starsInt < 1 || starsInt > 5) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ message: "Ungültige Anzahl Sterne (1–5)." }),
    };
  }

  try {
    const client = await connectToDatabase();
    const db = client.db("kartenlegen");
    const collection = db.collection("testimonials");

    const result = await collection.insertOne({
      name,
      text,
      stars: starsInt,
      createdAt: new Date(),
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ message: "Gespeichert", id: result.insertedId }),
    };
  } catch (error) {
    console.error("❌ Fehler bei submitTestimonial:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ message: "Serverfehler: " + error.message }),
    };
  }
};
