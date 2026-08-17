// src/components/Services.js
import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "פיתוח אתרים",
      text: "בניית אתרים רספונסיביים במגוון טכנולוגיות מודרניות.",
    },
    {
      title: "עיצוב חוויית משתמש",
      text: "דגש על עיצוב עדכני וידידותי, עם דגש על חווייה חלקה.",
    },
    {
      title: "פיתוח צד שרת",
      text: "יצירת API, עבודה עם בסיסי נתונים, וכו'.",
    },
  ];

  return (
    <div className="services-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        השירותים שלי
      </motion.h2>
      <div className="cards-wrapper">
        {services.map((srv, idx) => (
          <motion.div
            className="service-card"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{srv.title}</h3>
            <p>{srv.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
