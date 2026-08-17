// src/components/Header.js
import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// ייבוא קובץ CSS (אופציונלי אם תרצה להשתמש בקלאסים)
import "./Header.css";

export default function Header({ switchLanguage }) {
  const { t } = useTranslation();

  return (
    <AppBar
      position="sticky"
      component={motion.div}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      sx={{
        background: "linear-gradient(90deg, #2c3e8f 0%, #fdd017 100%)",
      }}
    >
      {/* סקשן נפרד לניווט עוגנים (בית, אודות וכו') */}
      <header className="site-header">
        <nav>
          <a href="#hero">{t("nav.home") || "בית"}</a>
          <a href="#about">{t("nav.about") || "אודות"}</a>
          <a href="#services">{t("nav.services") || "שירותים"}</a>
          <a href="#contact">{t("nav.contact") || "צור קשר"}</a>
        </nav>
      </header>

      <Toolbar>
        {/* כותרת האתר
        <Typography
          variant="h4"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "#fff" }}
          component={motion.h4}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t("header.title")}
        </Typography> */}

        {/* כפתור מעבר שפה */}
        <Button
          variant="contained"
          onClick={switchLanguage}
          sx={{
            backgroundColor: "#fff",
            color: "#2c3e8f",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#ffe680" },
          }}
        >
          {t("footer.switchLanguage")}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
