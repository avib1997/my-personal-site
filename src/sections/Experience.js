// src/sections/Experience.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Paper, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";

export default function Experience() {
  const { t } = useTranslation();
  const workExperience =
    t("resume.workExperience", { returnObjects: true }) || [];

  return (
    <Paper
      component={motion.div}
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      sx={{ p: 3, mb: 4, backgroundColor: "#edf0ff" }}
    >
      <Typography variant="h4" sx={{ mb: 2, color: "primary.main" }}>
        {t("resume.workExperienceTitle")}
      </Typography>
      <Divider sx={{ mb: 2 }} />

      {workExperience.map((job, idx) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
          style={{ marginBottom: "1rem" }}
        >
          <Typography variant="subtitle2" color="secondary">
            {job.period}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {job.company}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontStyle: "italic", mb: 1 }}>
            {job.role}
          </Typography>
          {job.desc.map((d, i) => (
            <Typography key={i} variant="body2" sx={{ ml: 2 }}>
              • {d}
            </Typography>
          ))}
        </motion.div>
      ))}
    </Paper>
  );
}
