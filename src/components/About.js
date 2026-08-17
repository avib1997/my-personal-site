// src/components/About.js
import React from "react";
import { motion } from "framer-motion";
import { ParallaxBanner } from "react-scroll-parallax";
// אפשר להשתמש בפרלקס אם תרצה

export default function About() {
  return (
    // אופציונלי: פרלקס ל-Background
    <ParallaxBanner
      layers={[
        {
          image: "/images/bg2.jpg",
          amount: 0.3, // מידת תזוזה
        },
      ]}
      style={{ height: "80vh" }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ fontSize: "2.5rem", margin: 0 }}
        >
          קצת עליי
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            maxWidth: "600px",
            textAlign: "center",
            marginTop: "1rem",
            lineHeight: 1.5,
          }}
        >
          אני מפתח תוכנה המתמחה ב-Front End ו-Back End, אוהב לשלב עיצוב נועז עם
          פונקציונליות גבוהה. בין הפרויקטים שלי: אתר זה וזה...
        </motion.p>
      </div>
    </ParallaxBanner>
  );
}
