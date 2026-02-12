import { useState } from "react";

//Tema ir aktyvus puslapis
const useDashboard = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const [activePage, setActivePage] = useState("dashboard"); // "dashboard" | "server" | "statistics" | "settings"

  return {
    theme,
    toggleTheme,
    activePage,
    setActivePage,
  };
};

export default useDashboard;
