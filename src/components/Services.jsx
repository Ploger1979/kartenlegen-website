import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, Sparkles, Clock, Users, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceCards = [
  {
    title: "Tarot-Legung",
    description:
      "Tiefe Einblicke in Ihre Lebenssituation mit einer individuellen Tarot-Kartenlegung.",
    icon: Star,
    color: "from-purple-500 to-indigo-600",
    delay: 0.1,
  },
  {
    title: "Lenormand-Legung",
    description:
      "Konkrete Antworten auf Ihre Fragen mit den präzisen Lenormand-Karten.",
    icon: Sparkles,
    color: "from-fuchsia-500 to-pink-600",
    delay: 0.2,
  },
  {
    title: "Liebesberatung",
    description:
      "Spezielle Kartenlegungen für Liebe, Beziehungen und Partnerschaft.",
    icon: Heart,
    color: "from-rose-500 to-red-600",
    delay: 0.3,
  },
  {
    title: "Zukunftsblick",
    description:
      "Erfahren Sie, welche Möglichkeiten und Chancen in Ihrer Zukunft liegen.",
    icon: Clock,
    color: "from-blue-500 to-cyan-600",
    delay: 0.4,
  },
  {
    title: "Partnerlegung",
    description:
      "Gemeinsame Sitzung für Paare, um Ihre Beziehungsdynamik zu verstehen.",
    icon: Users,
    color: "from-amber-500 to-yellow-600",
    delay: 0.5,
  },
  {
    title: "Persönliche Beratung",
    description:
      "Individuelle Gespräche zu Ihren Lebensthemen mit spiritueller Unterstützung.",
    icon: Coffee,
    color: "from-emerald-500 to-green-600",
    delay: 0.6,
  },
];

const ServiceCard = ({ title, description, icon: Icon, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover"
    >
      <div className={`h-2 bg-gradient-to-r ${color}`}></div>
      <div className="p-6">
        <div
          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-4`}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-purple-50 dark:bg-gray-900/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 star-bg opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-purple-900 dark:text-purple-300 mb-4">
            Meine Leistungen
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Entdecken Sie meine vielfältigen Angebote im Bereich Kartenlegen und
            spirituelle Beratung, die Ihnen helfen, Klarheit und Orientierung zu
            finden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
