// src/components/Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      sx={{
        textAlign: "center",
        p: 2,
        background: "linear-gradient(90deg, #fdd017 0%, #2c3e8f 100%)",
        color: "#fff",
        mt: 4,
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        {t("footer.copy")}
      </Typography>
      <Typography variant="caption">{t("footer.rights")}</Typography>
    </Box>
  );
}
