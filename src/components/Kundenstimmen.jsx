import React from "react";
import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";

const Kundenstimmen = () => {
  return (
    <div className="pt-24 min-h-screen bg-purple-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 py-12">
        {/* Titel und Beschreibung */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 dark:text-purple-300 mb-4">
            Kundenstimmen
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Erfahren Sie, was meine Kunden über ihre Erfahrungen mit meinen
            Kartenlegungen und Beratungen sagen. Sie können auch Ihre eigene
            Bewertung hinterlassen.
          </p>
        </motion.div>

        {/* Testimonials Komponente */}
        <Testimonials />
      </div>
    </div>
  );
};

export default Kundenstimmen;
