// src/index.js
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n/i18n"; // הגדרות i18n
import { ThemeProvider } from "@mui/material/styles";
import { getRoyalBlueGoldTheme } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import { ParallaxProvider } from "react-scroll-parallax";

function Root() {
  const [lang, setLang] = useState("en");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    if (lang === "he") {
      setDirection("rtl");
      document.body.dir = "rtl";
    } else {
      setDirection("ltr");
      document.body.dir = "ltr";
    }
  }, [lang]);

  const theme = getRoyalBlueGoldTheme(direction, lang);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* עטיפת הרקע הראשית */}
      <Box
        sx={{
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundImage: `url('/images/bg1.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative", // נדרש כדי למקם אלמנטים אבסולוטיים מעל
        }}
      >
        {/* swirl זהב ראשון, קבוע בפינה עליונה */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: { xs: 150, md: 300 },
            height: { xs: 150, md: 300 },
            backgroundImage: `url('/images/swirl-gold1.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            opacity: 0.8,
          }}
        />
        {/* swirl זהב שני, למטה משמאל */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: { xs: 100, md: 250 },
            height: { xs: 100, md: 250 },
            backgroundImage: `url('/images/swirl-gold2.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            opacity: 0.8,
          }}
        />
        <ParallaxProvider>
          {/* תוכן האפליקציה */}
          <App lang={lang} setLang={setLang} />
        </ParallaxProvider>
      </Box>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
