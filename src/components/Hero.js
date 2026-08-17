// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";
import "./Hero.css"; // אופציונלי לקלאסים

export default function Hero() {
  return (
    <div className="hero-container">
      {/* אפקט כניסה לטקסט - Fade/Slide */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ברוכים הבאים לאתר שלי!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        כאן תמצאו מידע עליי ועל הפרויקטים שלי
      </motion.p>

      <a href="#about" className="hero-btn">
        המשך
      </a>
    </div>
  );
}
