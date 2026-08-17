// src/theme.js
import { createTheme } from "@mui/material/styles";
import { heIL, enUS } from "@mui/material/locale";

export function getRoyalBlueGoldTheme(direction = "ltr", lang = "en") {
  const locale = lang === "he" ? heIL : enUS;

  return createTheme(
    {
      direction,
      palette: {
        mode: "light", // או 'dark' אם תרצה רקע יותר כהה, אבל לא שחור
        primary: {
          main: "#2c3e8f", // Royal Blue (לדוגמה)
        },
        secondary: {
          main: "#FDD017", // גוון זהב
        },
        background: {
          default: "#e7ecfa", // רקע כללי (תכלת/לבן-כחלחל)
          paper: "#fafbfd", // רקע פנימי בהיר (לא שחור)
        },
        text: {
          primary: "#1a1d33", // טקסט כהה לאפור (לא שחור)
          secondary: "#2c3e8f", // או זהב, בהתאם לטעם
        },
      },
      typography: {
        fontFamily: [
          "Poppins", // או 'Nunito'
          "Arial",
          "sans-serif",
        ].join(","),
        h3: {
          fontWeight: 700,
        },
        h4: {
          fontWeight: 600,
        },
      },
      // ניתן להוסיף התאמות נוספות ל-Components וכו'
    },
    locale
  );
}
