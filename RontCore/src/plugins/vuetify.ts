import { createVuetify } from "vuetify";
import "vuetify/styles";
import { fa } from "vuetify/iconsets/fa4";
import { aliases } from "vuetify/iconsets/fa-svg";

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: "#b2322b",
    secondary: "#FDCC99",
    accent: "#FFFFFF",
    error: "#b2322b",
    info: "#428bc1",
    success: "#529746",
    warning: "#ff992f",
    footer: "#5c7b83"
  },
};

const myCustomDarkTheme = {
  dark: true,
  colors: {
    primary: "#b2322b",
    secondary: "#FDCC99",
    accent: "#FFFFFF",
    error: "#b2322b",
    info: "#428bc1",
    success: "#529746",
    warning: "#ff992f",
    footer: "#5c7b83"
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
