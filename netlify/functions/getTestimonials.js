require("dotenv").config();
const { MongoClient } = require("mongodb");

exports.handler = async function (event, context) {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "❌ MONGODB_URI nicht gesetzt!" }),
    };
  }

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db("kartenlegen"); // ← dein Datenbankname
    const collection = db.collection("testimonials");

    // Daten holen und sortieren (neuste zuerst)
    const testimonials = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    // Fallback, falls kein Array
    if (!Array.isArray(testimonials)) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "❌ Keine gültige Datenstruktur" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(testimonials),
    };
  } catch (error) {
    console.error("❌ Fehler bei getTestimonials:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  } finally {
    await client.close();
  }
};
