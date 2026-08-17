// src/components/Contact.js
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`הודעה נשלחה:\n${JSON.stringify(formData, null, 2)}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#eaeaea",
        textAlign: "center",
      }}
    >
      <h2>צור קשר</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="שם מלא"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="אימייל"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="הודעה"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">שלח</button>
      </form>
    </motion.div>
  );
}
