import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // EmailJS importieren
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Check,
  Star,
  Clock,
  Sparkles,
  Heart,
  Award,
  Rocket,
} from "lucide-react";

emailjs.init("jbue8QJ2z6OB1DzHB");

const pricingPlans = [
  {
    title: "Ausführliche Frage",
    price: "3",
    duration: null,
    features: ["Lenormand-Legung", "Fokus auf eine spezifische Frage"],
    icon: Rocket,
    popular: false,
    delay: 0.1,
  },
  {
    title: "Ausführliche Fragen",
    price: "5",
    duration: null,
    features: ["Lenormand-Legung", "Fokus auf 2 spezifische Fragen"],
    icon: Award,
    popular: true,
    delay: 0.2,
  },
  {
    title: "Basis-Legung",
    price: "10",
    duration: "15 Minuten",
    features: [
      "Lenormand-Legung",
      "Fokus auf spezifische Fragen",
      "Persönliche Empfehlungen",
    ],
    icon: Heart,
    popular: false,
    delay: 0.3,
  },
  {
    title: "Intensive Basis-Legung",
    price: "30",
    duration: "60 Minuten",
    features: [
      "Lenormand-Legung",
      "Fokus auf spezifische Fragen",
      "Persönliche Empfehlungen",
    ],
    icon: Clock,
    popular: false,
    delay: 0.4,
  },
  {
    title: "Premium-Legung",
    price: "50",
    duration: "80 Minuten",
    features: [
      "Ausführliche Kartenlegung",
      "Kombination aus Tarot & Lenormand",
      "Aufzeichnung der Sitzung bei Wunsch",
      "7 Tage Nachbetreuung per WhatsApp",
    ],
    icon: Star,
    popular: true,
    delay: 0.5,
  },
  {
    title: "VIP-Beratung",
    price: "100",
    duration: "120 Minuten",
    features: [
      "Umfassende spirituelle Beratung",
      "Tiefgehende Kartenlegung",
      "Unbegrenzte Themenbereiche",
      "Persönlicher Entwicklungsplan",
      "Lebensberatung",
      "Aufzeichnung der Sitzung bei Wunsch",
      "14 Tage Nachbetreuung per WhatsApp",
    ],
    icon: Sparkles,
    popular: false,
    delay: 0.6,
  },
];

function PricingCard({
  title,
  price,
  features,
  duration,
  icon: Icon,
  onSelect,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative border rounded-2xl p-6 shadow-md flex flex-col justify-between hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="p-6 flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-2">
              {title}
            </h3>

            {Icon && (
              <div className="bg-indigo-100 p-2 rounded-full">
                <Icon className="text-indigo-500 w-6 h-6" />
              </div>
            )}
          </div>
          <div className="flex flex-col items-start mb-6">
            <span className="text-3xl font-bold text-purple-900 dark:text-purple-300">
              {price}€
            </span>
          </div>
          {duration && (
            <div className="mb-4">
              <span className="text-sm font-medium text-purple-800 dark:text-purple-100">
                {duration}
              </span>
            </div>
          )}

          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-700">
                <Check className="text-green-500 w-5 h-5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <Button
            onClick={onSelect}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold"
          >
            Jetzt wählen
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const form = useRef();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setPaymentConfirmed(false);
    setSelectedPaymentMethod(null);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!selectedPlan) {
      alert("Bitte wähle zuerst einen Tarif aus.");
      return;
    }
    setLoading(true);
    emailjs
      .sendForm(
        "service_8qzwxp8",
        "template_vnqp7rj",
        form.current,
        "jbue8QJ2z6OB1DzHB"
      )
      .then(
        () => {
          alert("Anfrage wurde erfolgreich gesendet!");
          setLoading(false);
        },
        () => {
          alert("Fehler beim Senden der Anfrage.");
          setLoading(false);
        }
      );
  };

  const confirmPayment = (method) => {
    setPaymentConfirmed(true);
    emailjs
      .send(
        "service_8qzwxp8",
        "template_vnqp7rj",
        {
          user_name: form.current.user_name.value,
          user_email: form.current.user_email.value,
          message: `Zahlungsbestätigung für ${selectedPlan} via ${method}`,
          selectedPlan: selectedPlan,
        },
        "jbue8QJ2z6OB1DzHB"
      )
      .then(
        () => console.log("Zahlungsbestätigung gesendet"),
        (err) => console.error("Fehler:", err)
      );
  };

  return (
    <div className="container mx-auto py-10 px-4 star-bg">
      <br />

      <div className="inline-block relative text-center mb-16">
        <h1 className="text-4xl font-bold text-purple-900 dark:text-purple-300 underline  ">
          Preise
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {pricingPlans.map((plan, idx) => (
          <PricingCard
            key={idx}
            title={plan.title}
            price={plan.price}
            duration={plan.duration}
            features={plan.features}
            icon={plan.icon}
            onSelect={() => handleSelectPlan(plan.title)}
          />
        ))}
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-4 max-w-md mx-auto"
      >
        <input type="hidden" name="selectedPlan" value={selectedPlan || ""} />
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            required
            className="w-full border p-2 rounded"
            placeholder="Dein Name"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">
            E-Mail
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            required
            className="w-full border p-2 rounded"
            placeholder="Deine E-Mail"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="message">
            Nachricht
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full border p-2 rounded"
            placeholder="Deine Nachricht"
          />
        </div>

        <div className="text-center">
          <Button type="submit" disabled={loading}>
            {loading ? "Sende..." : "Jetzt anfragen"}
          </Button>
        </div>
      </form>

      {selectedPlan && (
        <div className="mt-10 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Bezahlung für {selectedPlan}
          </h2>

          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setSelectedPaymentMethod("PayPal")}
              className={`flex-1 py-3 px-4 rounded-lg border-2 ${
                selectedPaymentMethod === "PayPal"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <div className="flex items-center justify-center">
                <img
                  src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png"
                  alt="PayPal"
                  className="h-8"
                />
              </div>
            </button>

            <button
              onClick={() => setSelectedPaymentMethod("IBAN")}
              className={`flex-1 py-3 px-4 rounded-lg border-2 ${
                selectedPaymentMethod === "IBAN"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <div className="flex items-center justify-center">
                <span className="ml-2">SEPA</span>
              </div>
            </button>
          </div>

          {selectedPaymentMethod === "PayPal" && (
            <div className="mt-4 space-y-2 p-4 border rounded-lg">
              <p>
                <strong>PayPal-Adresse:</strong> klarerblicktarot@gmail.com
              </p>
              <p className="text-sm text-yellow-600 font-medium mt-2">
                ⚠️ Bitte bestätigen Sie erst nach Abschluss der Zahlung
              </p>
              <a
                href={`https://paypal.me/selinazazou/${
                  selectedPlan.includes("3")
                    ? 3
                    : selectedPlan.includes("5")
                    ? 5
                    : selectedPlan.includes("10")
                    ? 10
                    : selectedPlan.includes("30")
                    ? 30
                    : selectedPlan.includes("50")
                    ? 50
                    : 100
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  Jetzt bei PayPal bezahlen
                </Button>
              </a>
              <Button
                onClick={() => confirmPayment("PayPal")}
                className="w-full mt-2"
              >
                Zahlung bestätigen
              </Button>
            </div>
          )}

          {selectedPaymentMethod === "IBAN" && (
            <div className="mt-4 space-y-2 p-4 border rounded-lg">
              <p>
                <strong>IBAN:</strong> DE99 1234 5678 9012 3456 78
              </p>
              <p>
                <strong>Inhaber:</strong> Max Mustermann
              </p>
              <p>
                <strong>Verwendungszweck:</strong> Demo-Buchung
              </p>
              <p className="text-sm text-yellow-600 font-medium mt-2">
                ⚠️ Bitte bestätigen Sie erst nach Abschluss der Zahlung
              </p>
              <Button
                onClick={() => confirmPayment("Banküberweisung")}
                className="w-full mt-2"
              >
                Zahlung bestätigen
              </Button>
            </div>
          )}

          {paymentConfirmed && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
              <p>Vielen Dank! Ihre Zahlung wurde bestätigt.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
