import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, Moon, Sun } from "lucide-react";
import KarteAbout from "../karten-bilder/karte-about.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 relative overflow-hidden moon-bg"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-purple-900 dark:text-purple-300 mb-4">
            Über Selina Zazou
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:w-2/5"
          >
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  className="w-full h-auto rounded-lg"
                  alt="Selina Zazou beim Kartenlegen"
                  src={KarteAbout}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-purple-100 dark:bg-purple-900/30 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 -z-10"></div>

              <motion.div
                className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                  delay: 0.6,
                }}
              >
                <Heart className="h-5 w-5 text-pink-500" />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 left-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                  delay: 0.8,
                }}
              >
                <Star className="h-5 w-5 text-yellow-500" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="md:w-3/5"
          >
            <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-400 mb-4">
              Meine Geschichte
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Mein echter Name ist Selina-Maria. Der Name Zazou entstand spontan
              in einer lustigen Unterhaltung mit meiner Mutter.
              <br />
              Seit über 12 Jahren widme ich mich der Kunst des Kartenlegens und
              der spirituellen Beratung.
              <br />
              Meine Reise begann in jungen Jahren, als ich eine besondere
              Verbindung zur spirituellen Welt entdeckte und meine intuitive
              Gabe erkannte, die mir durch meine Vorfahren in die Wiege gelegt
              wurde. <br /> Seit einem guten Jahr findet man mich auch auf
              TikTok unter @selinazazou7, wo ich meine spirituellen Fähigkeiten
              als Content nutze, Live gehe und auch Comedy Content produziere.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Mit meiner Erfahrung und Expertise helfe ich Menschen dabei,
              Klarheit in ihrem Leben zu finden, wichtige Entscheidungen zu
              treffen und ihren wahren Lebensweg zu erkennen. Jede Sitzung ist
              individuell auf Ihre persönlichen Bedürfnisse zugeschnitten.
              <p></p>
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg flex items-center">
                <Moon className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3" />
                <span className="text-purple-900 dark:text-purple-300 font-medium">
                  Tarot & Lenormand
                </span>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg flex items-center">
                <Sun className="h-6 w-6 text-amber-500 mr-3" />
                <span className="text-purple-900 dark:text-purple-300 font-medium">
                  Spirituelle Beratung
                </span>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg flex items-center">
                <Star className="h-6 w-6 text-indigo-500 mr-3" />
                <span className="text-purple-900 dark:text-purple-300 font-medium">
                  Energiearbeit
                </span>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg flex items-center">
                <Heart className="h-6 w-6 text-pink-500 mr-3" />
                <span className="text-purple-900 dark:text-purple-300 font-medium">
                  Lebensberatung
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
