// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './i18n/i18n';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; // ייבוא ה-theme שיצרנו
import MenuIcon from "@mui/icons-material/Menu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
