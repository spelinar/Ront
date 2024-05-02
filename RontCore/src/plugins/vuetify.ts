import { createVuetify } from "vuetify";
import "vuetify/styles";
import { fa } from "vuetify/iconsets/fa4";
import { aliases } from "vuetify/iconsets/fa-svg";

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: "#768350",
    secondary: "#FDCC99",
    accent: "#FFFFFF",
    error: "#b2322b",
    info: "#428bc1",
    success: "#529746",
    warning: "#ff992f",
    footer: "#35383d",
    "footer-accent": "#24272c",
  },
};

const myCustomDarkTheme = {
  dark: true,
  colors: {
    primary: "#768350",
    secondary: "#FDCC99",
    accent: "#FFFFFF",
    error: "#b2322b",
    info: "#428bc1",
    success: "#529746",
    warning: "#ff992f",
    footer: "#5c7b83",
    "footer-accent": "#33494f",
  },
};

export default createVuetify({
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: myCustomLightTheme,
      dark: myCustomDarkTheme,
    },
  },
});
