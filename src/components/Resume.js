// src/components/Resume.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Paper, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";

export default function Resume() {
  const { t } = useTranslation();

  const workExperience = t("resume.workExperience", { returnObjects: true });
  const education = t("resume.education", { returnObjects: true });
  const skills = t("resume.skills", { returnObjects: true });
  const languages = t("resume.languages", { returnObjects: true });
  const references = t("resume.references", { returnObjects: true });

  return (
    <Paper
      elevation={8}
      sx={{
        p: 3,
        mb: 4,
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(4px)",
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <SectionTitle text={t("resume.workExperienceTitle")} />

      {workExperience.map((job, idx) => (
        <MotionBlock key={job.id} delay={idx * 0.1}>
          <Typography variant="subtitle2" color="secondary">
            {job.period}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
            {job.company}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontStyle: "italic", mb: 1 }}>
            {job.role}
          </Typography>
          {job.desc.map((line, i) => (
            <Typography key={i} variant="body2" sx={{ ml: 2, mb: 0.5 }}>
              • {line}
            </Typography>
          ))}
        </MotionBlock>
      ))}

      <Divider sx={{ my: 2, borderColor: "secondary.main" }} />

      <SectionTitle text={t("resume.educationTitle")} />
      {education.map((ed, idx) => (
        <MotionBlock key={ed.id} delay={idx * 0.1}>
          <Typography variant="subtitle2" color="secondary">
            {ed.period}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            {ed.institution}
          </Typography>
          {ed.details.map((line, i) => (
            <Typography key={i} variant="body2" sx={{ ml: 2, mb: 0.5 }}>
              • {line}
            </Typography>
          ))}
        </MotionBlock>
      ))}

      <Divider sx={{ my: 2, borderColor: "secondary.main" }} />

      <SectionTitle text={t("resume.skillsTitle")} />
      <MotionBlock>
        {skills.map((skill, i) => (
          <Typography key={i} variant="body2" sx={{ ml: 2, mb: 0.5 }}>
            • {skill}
          </Typography>
        ))}
      </MotionBlock>

      <Divider sx={{ my: 2, borderColor: "secondary.main" }} />

      <SectionTitle text={t("resume.languagesTitle")} />
      <MotionBlock>
        {languages.map((langItem, i) => (
          <Typography key={i} variant="body2" sx={{ ml: 2, mb: 0.5 }}>
            • {langItem}
          </Typography>
        ))}
      </MotionBlock>

      <Divider sx={{ my: 2, borderColor: "secondary.main" }} />

      <SectionTitle text={t("resume.referencesTitle")} />
      <MotionBlock>
        {references.map((ref, i) => (
          <Typography key={i} variant="body2" sx={{ ml: 2, mb: 0.5 }}>
            • {ref}
          </Typography>
        ))}
      </MotionBlock>
    </Paper>
  );
}

// כותרת מקטע עם אפקט
function SectionTitle({ text }) {
  return (
    <Typography
      variant="h4"
      color="secondary"
      sx={{ mb: 2, mt: 2, fontWeight: "bold" }}
      component={motion.h4}
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {text}
    </Typography>
  );
}

// עיטוף אלמנט ב-motion.div (Fade-in/Slide-up)
function MotionBlock({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      style={{ marginBottom: "1.5rem" }}
    >
      {children}
    </motion.div>
  );
}
