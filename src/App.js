// src/App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import Intro from "./components/Intro";
import Services from "./components/Services";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Resume from "./components/Resume";
// (שים לב: יכול להיות גם ב-sections אם תרצה)

import Contact from "./components/Contact";
// (אפשר להחליף ב-Contact2 אם זה הטופס שאתה מעדיף)

import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

function App({ lang, setLang }) {
  const { i18n } = useTranslation();

  const switchLanguage = () => {
    const newLang = i18n.language === "he" ? "en" : "he";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <>
      <Header switchLanguage={switchLanguage} />

      {/* כדי שה-Hero יהיה בגובה מסך מלא, אפשר לעטוף ב-Container אבל להשבית פדינג */}
      <section id="hero" style={{ minHeight: "100vh" }}>
        <Hero />
      </section>

      <Container sx={{ py: 4, minHeight: "80vh" }}>
        <section id="intro">
          <Intro />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="aboutMe">
          <AboutMe />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="resume">
          <Resume />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </Container>

      <Footer />
    </>
  );
}

export default App;
