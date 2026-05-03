import { createContext, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext(null);

const STORAGE_KEY = "edubridge-theme";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "edubridgeLight";
    }

    return localStorage.getItem(STORAGE_KEY) || "edubridgeLight";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "edubridgeLight" ? "edubridgeDark" : "edubridgeLight"
    );
  };

  const value = useMemo(
    () => ({
      theme,
      isDarkMode: theme === "edubridgeDark",
      toggleTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
