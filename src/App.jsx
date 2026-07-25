import React, { useEffect } from "react";
import { Toaster } from "./components/ui/toaster";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Kundenstimmen from "./components/Kundenstimmen";

import FAQ from "@/components/FAQ";
import Testimonials from "./components/Testimonials";

function App() {
  /* Smooth scroll für In-Page-Links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const targetId = e.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);*/

  return (
    <PayPalScriptProvider
      options={{
        "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
        currency: import.meta.env.VITE_CURRENCY,
      }}
    >
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/kundenstimmen" element={<Kundenstimmen />} />
          </Routes>
        </main>

        <Footer />
        <Toaster />
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
