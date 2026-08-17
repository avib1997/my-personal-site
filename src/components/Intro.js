// src/components/Intro.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function Intro() {
  const { t } = useTranslation();
  const detailsList = t("intro.detailsList", { returnObjects: true }) || [];

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      sx={{
        mb: 4,
        p: 3,
        textAlign: "center",
        backgroundColor: "#dfe4fb", // תכלת בהיר
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", color: "primary.main", mb: 2 }}
      >
        {t("intro.headline")}
      </Typography>

      <Typography variant="h5" sx={{ mb: 2, color: "secondary.main" }}>
        {t("intro.subHeadline")}
      </Typography>

      {detailsList.map((line, idx) => (
        <Typography key={idx} variant="body1" sx={{ mb: 0.5 }}>
          • {line}
        </Typography>
      ))}
    </Box>
  );
}
