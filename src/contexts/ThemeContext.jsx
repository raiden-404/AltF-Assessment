import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 1. Simple state: "light" or "dark"
  const [theme, setTheme] = useState(() => {
    // Check memory on load, default to light
    return localStorage.getItem("appTheme") || "light";
  });

  useEffect(() => {
    // Save to memory whenever it changes
    localStorage.setItem("appTheme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);