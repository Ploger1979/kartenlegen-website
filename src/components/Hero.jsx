import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import KarteHero from "../karten-bilder/karte-hero.jpeg";
import FAQ from "@/components/FAQ";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden star-bg"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-white dark:from-purple-950/30 dark:to-gray-900 -z-10"></div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 text-purple-300 opacity-20"
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 0.2, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <Star size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-10 text-purple-300 opacity-20"
        initial={{ opacity: 0, rotate: 30 }}
        animate={{ opacity: 0.2, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      >
        <Star size={30} />
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-900 dark:text-purple-300 mb-4">
                Entdecke deine Zukunft mit Selina Zazou
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Professionelles Kartenlegen und spirituelle Beratung für
                Klarheit und Orientierung auf deinem Lebensweg.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/pricing">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-700 to-fuchsia-600 hover:from-purple-800 hover:to-fuchsia-700 text-white"
                  >
                    <Sparkles className="mr-2 h-4 w-4" /> Termin vereinbaren
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-purple-300 text-purple-700 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-900/30"
                  >
                    Mehr erfahren
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative z-10"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  className="w-full h-auto rounded-lg"
                  alt="Tarotkarten mit mystischer Atmosphäre"
                  src={KarteHero}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
              </div>

              {/* Decorative card */}
              <motion.div
                className="absolute -bottom-10 -right-10 w-32 h-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 rotate-12 z-20"
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: 12 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="h-full w-full border-2 border-purple-200 dark:border-purple-800 rounded flex items-center justify-center">
                  <Star className="text-purple-500 h-10 w-10" />
                </div>
              </motion.div>
            </motion.div>

            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-fuchsia-200/30 dark:bg-fuchsia-800/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
      <FAQ />
    </section>
  );
};

export default Hero;
