// src/sections/Skills.js
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Typography, Grid, Card, CardContent, Box } from "@mui/material";

const skillsList = [
  { key: "react", label: "React" },
  { key: "node", label: "Node.js" },
  { key: "angular", label: "Angular" },
  { key: "csharp", label: "C#", color: "#68217A" },
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <Box
      component={motion.div}
      // כניסה חלקה
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      // רקע פנימי
      sx={{
        my: 4,
        mx: "auto",
        p: 3,
        maxWidth: "1200px",
        borderRadius: "8px",
        backgroundColor: "rgba(255, 215, 0, 0.2)", // קצת רקע מוזהב-שקוף
        backgroundImage: `url('/images/swirl-gold1.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        backgroundSize: { xs: "100px", md: "200px" },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "#2c3e8f", fontWeight: "bold" }}
      >
        {t("skills.title")}
      </Typography>

      <Grid container spacing={2}>
        {skillsList.map((skill) => (
          <Grid item xs={12} sm={6} md={3} key={skill.key}>
            <Card
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              sx={{
                backgroundColor: "#2a3d66", // כחול כהה
                color: "#fff",
                borderLeft: "5px solid #FFD700", // פס זהב
                boxShadow: "0 4px 10px rgba(255, 215, 0, 0.3)",
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {skill.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
