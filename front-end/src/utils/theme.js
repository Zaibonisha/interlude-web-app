import { createContext } from "react";

export const themes = {
  dark: "black-content",
  light: "",
};

export const ThemeContext = createContext({
  theme: themes.light,
  changeTheme: () => {},
  
});
