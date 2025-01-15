// src/App.js
import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  // this hook gives us access to the t() function and the current i18n instance
  const { t, i18n } = useTranslation();

  // פונקציה להחלפת שפה
  const switchLanguage = () => {
    // בודקים מהי השפה הנוכחית; אם היא he – נעבור לאנגלית, ואם אנגלית – נעבור לעברית
    const newLanguage = i18n.language === "he" ? "en" : "he";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <Header />
      <AboutMe />
      <div style={{ textAlign: i18n.language === "he" ? "right" : "left" }}>
        <h1>{t("header.title")}</h1>
        <h2>{t("body.greeting")}</h2>
        <p>{t("body.description")}</p>

        <button onClick={switchLanguage}>{t("footer.switchLanguage")}</button>
      </div>
    </>
  );
}

export default App;
