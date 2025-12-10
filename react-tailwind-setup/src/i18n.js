import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        greeting: "Hello! Welcome to Focus Bear.",
        clickMessage: "Click the button below!",
      },
    },
    es: {
      translation: {
        greeting: "¡Hola! Bienvenido a Focus Bear.",
        clickMessage: "¡Haz clic en el botón de abajo!",
      },
    },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
