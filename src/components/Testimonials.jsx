import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronDown, ChevronUp } from "lucide-react";
import { useEffect } from "react";

// Einzelne Karte
const TestimonialCard = ({ name, text, stars, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
    >
      <div className="flex mb-4">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{text}"</p>
      <p className="font-medium text-purple-900 dark:text-purple-300">{name}</p>
    </motion.div>
  );
};

// Hauptkomponente
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({ name: "", text: "", stars: "" });
  const [showForm, setShowForm] = useState(false); // Neuer State für Formular-Sichtbarkeit

  const fetchTestimonials = async () => {
    try {
      const res = await fetch("/.netlify/functions/getTestimonials");
      const data = await res.json();
      console.log("📦 Daten von API:", data); // Nur zum Debuggen
      setTestimonials(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("❌ Fehler beim Laden der Bewertungen:", err);
      setTestimonials([]);
    }
  };

  useEffect(() => {
    fetchTestimonials(); // automatisch beim Laden
  }, []);
  // Formularänderungen
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/.netlify/functions/submitTestimonial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      alert("Danke für dein Feedback!");
      setFormData({ name: "", text: "", stars: "" });
      setShowForm(false);

      await fetchTestimonials(); //Jetzt Daten neu laden
    } else {
      alert("Fehler: " + result.message);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-purple-50 dark:bg-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 moon-bg opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Bewertungs-Grid */}
        {Array.isArray(testimonials) &&
          testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}

        {/* Button zum Anzeigen des Formulars */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            {showForm ? (
              <>
                <ChevronUp className="h-5 w-5" />
                Formular schließen
              </>
            ) : (
              <>
                <ChevronDown className="h-5 w-5" />
                Bewertung abgeben
              </>
            )}
          </button>
        </div>

        {/* Bewertungsformular */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-16"
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-900 dark:text-purple-300">
              Bewertung abgeben
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-gray-700 dark:text-gray-300"
                >
                  Dein Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-gray-700 dark:text-gray-300"
                >
                  Dein Feedback
                </label>
                <textarea
                  id="text"
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                  rows={5}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="stars"
                  className="block mb-2 text-gray-700 dark:text-gray-300"
                >
                  Sterne (1–5)
                </label>
                <input
                  type="number"
                  id="stars"
                  name="stars"
                  min="1"
                  max="5"
                  value={formData.stars}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Absenden
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
