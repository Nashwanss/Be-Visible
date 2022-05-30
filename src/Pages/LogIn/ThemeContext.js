import { createContext } from "react";

const themes = {
  light: {
    primaryBackground: "#ffffff",
    primaryText: "#3c8891",
    secondaryBackground: "##dee2e6",
    secondaryText: "#000000",
    buttonBackground: "#3c8891",
    buttonText: "#ffffff",
  },
  dark: {
    primaryBackground: "#000000",
    primaryText: "#ffffff",
    secondaryBackground: "blue",
    secondaryText: "#ffffff",
    buttonBackground: "red",
    buttonText: "#ffffff",
  },
};

const ThemeContext = createContext({
  theme: themes.dark,
  changeThemeHandler: () => {},
});

export { themes, ThemeContext };
