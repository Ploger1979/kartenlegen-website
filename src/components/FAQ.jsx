import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Wie läuft eine Kartenlegung bei Ihnen ab?",
    answer:
      "Eine Sitzung beginnt mit einem kurzen Gespräch, in dem wir Ihre Anliegen besprechen. Anschließend führe ich die Kartenlegung durch und interpretiere die Karten für Sie. Je nach gewähltem Paket dauert eine Sitzung zwischen 15 und 120 Minuten. Sie haben jederzeit die Möglichkeit, Fragen zu stellen.",
  },
  {
    question:
      "Kann ich auch eine Beratung per Telefon oder Video-Call erhalten?",
    answer:
      "Ja, ich biete meine Beratungen sowohl persönlich als auch per Telefon oder Video-Call an. Die Qualität der Legung bleibt dabei gleich, da ich mich auch über die Distanz auf Ihre Energie einstellen kann.",
  },
  {
    question: "Wie oft sollte ich eine Kartenlegung in Anspruch nehmen?",
    answer:
      "Das hängt von Ihren individuellen Bedürfnissen ab. Manche Kunden kommen einmal im Monat, andere nur bei wichtigen Lebensentscheidungen. Ich empfehle, zwischen den Sitzungen genügend Zeit zu lassen, um die Erkenntnisse zu verarbeiten und umzusetzen.",
  },
  {
    question: "Können Sie die Zukunft vorhersagen?",
    answer:
      "Die Karten zeigen Tendenzen und mögliche Entwicklungen auf, basierend auf der aktuellen Energie und den Entscheidungen, die Sie treffen. Es geht weniger um konkrete Vorhersagen als vielmehr darum, Ihnen Einsichten zu geben, die Ihnen helfen, bewusste Entscheidungen zu treffen.",
  },
  {
    question: "Welche Kartendecks verwenden Sie?",
    answer:
      "Ich arbeite hauptsächlich mit dem Licht & Schatten Tarot und mit traditionellen Lenormand-Decks. Je nach Fragestellung und Intuition wähle ich das passende Deck aus oder kombiniere verschiedene Systeme für tiefere Einsichten.",
  },
  {
    question: "Wie bereite ich mich auf eine Sitzung vor?",
    answer:
      "Kommen Sie mit einer offenen Haltung und überlegen Sie sich im Vorfeld, welche Themen oder Fragen Sie besprechen möchten. Es ist hilfreich, wenn Sie sich in einer ruhigen Umgebung befinden und nicht unter Zeitdruck stehen.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 dark:text-purple-300 mb-4">
            Häufig gestellte Fragen
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto mb-6"></div>
          <p className="px-6 pb-4 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Hier finden Sie Antworten auf die häufigsten Fragen zu meinen
            Dienstleistungen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border-none"
              >
                <AccordionTrigger className="px-6 py-4 text-lg md:text-xl font-bold text-purple-900 dark:text-purple-300 hover:no-underline hover:text-purple-700 dark:hover:text-purple-400">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
