// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl", // אם תרצה שהתצוגה תהיה RTL בשביל עברית. אפשר לשנות דינמית...
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
  },
  typography: {
    fontFamily: "Open Sans, Arial, sans-serif",
  },
});

export default theme;
