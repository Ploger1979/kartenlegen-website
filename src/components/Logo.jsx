import React from "react";
import { motion } from "framer-motion";
import logoImage from "../karten-bilder/WhatsApp Image 2025-05-24 at 01.33.52.png";

const Logo = ({ className, isFooter = false }) => {
  // Neuer isFooter Prop
  return (
    <motion.div
      className={`relative flex items-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-full"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img
          src={logoImage}
          alt="Selina Zazou Logo"
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>
      <motion.div
        className="ml-2 text-lg font-medium"
        whileHover={
          isFooter
            ? {
                color: ["#ffffff", "#6b46c1", "#ffffff"], // Nur für Footer
              }
            : {
                color: ["#6b46c1", "#ffffff", "#6b46c1"], // Original für Hero
              }
        }
        transition={{
          duration: 1,
          times: [0, 0.5, 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span
          className={`block ${
            isFooter
              ? "text-white"
              : "text-purple-900 dark:text-purple-300 hover:text-white transition-colors duration-300"
          }`}
        >
          Selina Zazou
        </span>
        <span
          className={`block text-xs ${
            isFooter
              ? "text-white/80"
              : "text-purple-600 dark:text-purple-400 hover:text-purple-200 transition-colors duration-300"
          }`}
        >
          Kartenlegen
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Logo;
