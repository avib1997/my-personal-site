import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  // לחצן החלפת שפה (אם נרצה לשים אותו בהדר ולא ב־App.js)
  const switchLanguage = () => {
    const newLanguage = i18n.language === "he" ? "en" : "he";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* אייקון 'המבורגר' (סמל תפריט) בצד שמאל/ימין */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {t("header.title")}
        </Typography>

        {/* לדוגמה: כפתור החלפת שפה */}
        <Button color="inherit" onClick={switchLanguage}>
          {t("footer.switchLanguage")}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
