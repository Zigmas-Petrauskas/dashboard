import { createContext, useContext, useState, useEffect } from "react";

// Sukuriam kontekstą
const ThemeContext = createContext();

// Hook naudojimui kituose komponentuose
export const useTheme = () => useContext(ThemeContext);

// HMR-safe ThemeProvider
export const ThemeProvider = ({ children, defaultTheme = "light" }) => {
  const [theme, setTheme] = useState(defaultTheme);

  // Toggle funkcija
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // Persist theme localStorage
  useEffect(() => {
    const saved = localStorage.getItem("app-theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("app-theme", theme);
    document.body.dataset.theme = theme; // optional: galima CSS naudoti [data-theme="dark"]
  }, [theme]);

  // Optional: theme icon komponentas
  const ThemeIcon = theme === "light" ? () => <span>🌞</span> : () => <span>🌙</span>;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, ThemeIcon }}>
      {children}
    </ThemeContext.Provider>
  );
};
