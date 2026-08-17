// src/components/Contact.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Divider,
} from "@mui/material";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // שליחה אמיתית ל-EmailJS / API וכד' (כאן רק alert)
    alert(JSON.stringify(formData, null, 2));
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      sx={{
        p: 3,
        mb: 4,
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
      elevation={10}
    >
      <Typography
        variant="h4"
        color="secondary"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        {t("contact.title")}
      </Typography>
      <Divider sx={{ mb: 3, borderColor: "secondary.main" }} />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label={t("contact.name")}
          variant="outlined"
          color="secondary"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label={t("contact.email")}
          variant="outlined"
          color="secondary"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label={t("contact.message")}
          variant="outlined"
          color="secondary"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
        />

        <Box sx={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
            sx={{ mt: 2, fontWeight: "bold" }}
          >
            {t("contact.send")}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
