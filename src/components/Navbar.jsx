import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";

const TESTIMONIALS_PREVIEW = [
  {
    id: 1,
    name: "Lucie P.",
    text: "Selina ist eine sehr gute Kartenlegerin...",
    stars: 5,
  },
  {
    id: 2,
    name: "Sevdije R.",
    text: "Liebe Selina , sehr schöne einfühlsame Legung...",
    stars: 4,
  },
  {
    id: 3,
    name: "Joli",
    text: "Es war eine sehr stimmige und angenehme Erfahrung!",
    stars: 4,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const navLinks = [
    { name: "Startseite", to: "/" },
    { name: "Über mich", to: "/about" },
    { name: "Leistungen", to: "/services" },
    { name: "Preise", to: "/pricing" },
    { name: "Kontakt", to: "/contact" },
    { name: "Kundenstimmen", to: "/kundenstimmen" }, // NEU!
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Wechsel alle 5 Sekunden zur nächsten Bewertung
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS_PREVIEW.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) =>
              link.to.startsWith("#") ? (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={link.to}
                    className="text-purple-900 dark:text-purple-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.to}
                    className="text-purple-900 dark:text-purple-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              )
            )}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.to.startsWith("#") ? (
                  <a
                    key={link.name}
                    href={link.to}
                    onClick={() => setIsOpen(false)}
                    className="text-purple-900 dark:text-purple-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2 border-b border-gray-100 dark:border-gray-800"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="text-purple-900 dark:text-purple-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2 border-b border-gray-100 dark:border-gray-800"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
