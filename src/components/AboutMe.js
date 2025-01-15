import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";

export default function AboutMe() {
  const { t, i18n } = useTranslation();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        margin: "2rem auto",
        padding: "1.5rem",
        maxWidth: "600px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        {t("body.greeting")}
      </Typography>
      <Typography variant="body1">{t("body.description")}</Typography>
    </Box>
  );
}
