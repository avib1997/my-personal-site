// src/sections/AboutMe.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <Paper
      component={motion.div}
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      sx={{
        p: 3,
        mb: 4,
        backgroundColor: "#e2e7fc",
        borderLeft: "5px solid #fdd017",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, color: "primary.main" }}>
        {t("about.title") || "About Me"}
      </Typography>
      <Typography variant="body1">
        {t("about.description") || "Your personal story here..."}
      </Typography>
    </Paper>
  );
}
