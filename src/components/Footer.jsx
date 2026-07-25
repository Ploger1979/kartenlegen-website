import React from "react";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
//import { Facebook, Instagram } from "lucide-react";
//import { SiTiktok } from "react-icons/si";
import FacebookIcon from "@/facebook-neu-96.png";
import InstagramIcon from "@/instagram-96.png";
import TiktokIcon from "@/tiktok-96.png";
const Footer = () => {
  const currentYear = 2025;

  return (
    <footer className="bg-purple-900 text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 star-bg opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo className="text-white" isFooter={true} />
            <br />
            <br />
            <p className="text-purple-200 mb-6">
              Professionelles Kartenlegen und spirituelle Beratung für mehr
              Klarheit und Orientierung in Ihrem Leben.
            </p>
            <div className="flex space-x-4">
              {/* TikTok */}
              <motion.a
                href="https://www.tiktok.com/@selinazazou7?_t=ZN-8wXRoBjdKy6&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative z-20 w-10 h-10 rounded-full bg-purple-800 hover:bg-purple-700 flex items-center justify-center transition-colors "
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={TiktokIcon}
                  alt="TikTok"
                  className="h-10 w-10 object-contain"
                />

                <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white text-purple-800 text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Folge mir auf TikTok
                </span>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/zazouselina?igsh=MXB5azBtdmZxa25nNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 rounded-full bg-purple-800 hover:bg-purple-700 flex items-center justify-center transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="h-10 w-10 object-contain"
                />

                <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white text-purple-800 text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Folge mir auf Instagram
                </span>
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="https://www.facebook.com/share/1XwJNVYHMU/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 rounded-full bg-purple-800 hover:bg-purple-700 flex items-center justify-center transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="h-10 w-10 object-contain"
                />

                <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white text-purple-800 text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Folge mir auf Facebook
                </span>
              </motion.a>
            </div>
          </div>

          <div>
            <span className="font-bold text-lg block mb-6">Schnelllinks</span>
            <ul className="space-y-3 text-purple-200">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Startseite
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  Über mich
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Leistungen
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Preise
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg block mb-6">Leistungen</span>
            <ul className="space-y-3 text-purple-200">
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Tarot-Legung
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Lenormand-Legung
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Liebesberatung
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Zukunftsblick
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Persönliche Beratung
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg block mb-6">Kontakt</span>
            <ul className="space-y-3 text-purple-200">
              <li>
                <a
                  href="tel:+4915114467834"
                  className="hover:text-white transition-colors"
                >
                  +49 (0) 1511 4467834
                </a>
              </li>
              <li>
                <a
                  href="mailto:klarerblicktarot@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  klarerblicktarot@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-800 pt-8 text-center text-purple-300">
          <p>
            © {currentYear} Selina Zazou - Kartenlegen & Spirituelle Beratung.
            Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
