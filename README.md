# 🔮 Selina Zazou (Kartenlegen) – Spiritual Consulting & Tarot E-Commerce Platform

[![Live Demo](https://img.shields.io/badge/Live_Demo-kartenlegen--selinazazou.org-9333EA?style=for-the-badge&logo=google-chrome&logoColor=white)](https://kartenlegen-selinazazou.org/)
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)
[![PayPal](https://img.shields.io/badge/PayPal-Smart_Buttons_SDK-003087?style=for-the-badge&logo=paypal&logoColor=white)](https://developer.paypal.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Serverless-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Netlify](https://img.shields.io/badge/Netlify-Serverless_Functions-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)

> **An interactive, modern single-page web application for spiritual life guidance, Tarot, and Lenormand card reading.** Built for German spiritual practitioner *Selina Zazou*, engineered with React, Vite, Tailwind CSS, Framer Motion, integrated PayPal smart checkout, serverless Netlify Functions, and MongoDB testimonial storage.

---

## 📸 Preview

![Kartenlegen Website Preview](./public/kartenlegen-preview.png)

---

## 🌟 Key Features

- **🔮 Mystical Celestial UI & Fluid Animations:** Ethereal purple and gold aesthetic styled with **Tailwind CSS** and animated with **Framer Motion** for mystical card reveals and smooth section transitions.
- **💳 Integrated PayPal Smart Checkout (`PaypalButton.jsx`):** Seamless online consultation bookings with automated PayPal Smart Buttons (`@paypal/react-paypal-js`) for instant booking payments.
- **🎴 Interactive Consultation & Pricing Catalog (`Pricing.jsx`, `Services.jsx`):** Dynamic selection tiers for Tarot card spreads, Lenormand inquiries, deep soul consultations, and relationship forecasts.
- **⚡ Serverless Backend Architecture (Netlify Functions):** Node.js serverless functions (`/netlify/functions/`) coupled with **MongoDB** for dynamically loading and submitting verified client testimonials (`Testimonials.jsx`).
- **📨 Automated Appointment Booking Pipeline:** Dual-channel inquiry dispatch integrating **EmailJS** and **Formspree** for immediate appointment confirmations.
- **🧩 Accessible Primitives & Interactive Elements:** Radix UI accessible accordion components for structured FAQs (`FAQ.jsx`), animated dialogs, and reactive toast notifications (`toaster.jsx`).
- **📱 Mobile-First Responsive Experience:** Completely responsive interface crafted for crystal-clear readability and touch interactions across mobile devices, tablets, and desktop displays.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | [React 18](https://react.dev/) | Component-driven single-page architecture |
| **Build Tool & Bundler** | [Vite 4](https://vitejs.dev/) | Lightning-fast Hot Module Replacement (HMR) and optimized build bundles |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) & Radix UI | Utility-first design tokens and accessible unstyled UI primitives |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Smooth card flips, interactive hovers, and scroll animations |
| **Payment Gateway** | [PayPal React SDK](https://developer.paypal.com/) | Secure checkout and automated booking fee processing |
| **Serverless Backend** | [Netlify Functions](https://www.netlify.com/platform/core/functions/) | Serverless REST endpoints for database operations |
| **Database** | [MongoDB](https://www.mongodb.com/) (NoSQL) | Persistent storage for verified customer reviews and inquiries |
| **Notifications** | [EmailJS](https://www.emailjs.com/) | Real-time automated booking emails directly from client actions |
| **Icons** | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) | Modern visual iconography |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.x or later)
- **npm**, **yarn**, or **pnpm**
- **MongoDB** cluster (Local or MongoDB Atlas)

### Environment Setup

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ploger1979/kartenlegen-website.git
   cd kartenlegen-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Navigate to [http://localhost:5173](http://localhost:5173) in your browser.

4. **Run with Netlify Serverless Functions (Optional):**
   ```bash
   npm install -g netlify-cli
   netlify dev
   ```

---

## 📦 Project Directory Structure

```plaintext
kartenlegen-website/
├── netlify/
│   └── functions/        # Serverless Node.js endpoints (MongoDB testimonials API)
├── src/
│   ├── components/       # Domain and presentation UI components
│   │   ├── ui/           # Radix UI primitives (Accordion, Toast, Button)
│   │   ├── About.jsx     # Practitioner background and spiritual bio
│   │   ├── Contact.jsx   # Booking request and EmailJS form
│   │   ├── FAQ.jsx       # Interactive accordion FAQ
│   │   ├── Hero.jsx      # High-impact celestial hero banner
│   │   ├── Navbar.jsx    # Responsive navigation bar
│   │   ├── Pricing.jsx   # Tiered consultation plans & PayPal integration
│   │   ├── Services.jsx  # Tarot and Lenormand consultation modules
│   │   └── Testimonials.jsx # Dynamic client feedback carousel
│   ├── karten-bilder/    # High-resolution tarot card photography & artwork
│   ├── lib/              # Shared utility functions (clsx, twMerge)
│   ├── App.jsx           # Application routing and root layout
│   ├── main.jsx          # React DOM entrypoint
│   └── index.css         # Tailwind directives and custom animation keyframes
├── public/               # Static assets & preview imagery
├── netlify.toml          # Netlify build and redirect configuration
└── vite.config.js        # Vite bundler plugins and aliases
```

---

## 👨‍💻 Author

**Ayman Plöger**  
- Portfolio: [aymanbyte-portfolio.netlify.app](https://aymanbyte-portfolio.netlify.app/)  
- GitHub: [@Ploger1979](https://github.com/Ploger1979)  
- LinkedIn: [Ayman Plöger](https://www.linkedin.com/in/ayman-pl%C3%B6ger/)

---

## 📄 License

This project is proprietary and developed exclusively for **Selina Zazou – Kartenlegen & Spirituelle Lebensberatung**.