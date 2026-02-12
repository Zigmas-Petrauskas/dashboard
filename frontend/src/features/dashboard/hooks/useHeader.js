import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const useHeader = (initialTheme = "dark") => {
  const [theme, setTheme] = useState(initialTheme);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const toggleNotifications = () => setNotificationsOpen((prev) => !prev);

  // Theme icon pagal dabartinę temą
  const ThemeIcon = theme === "dark" ? FaMoon : FaSun;

  return {
    theme,
    toggleTheme,
    notificationsOpen,
    toggleNotifications,
    ThemeIcon,
  };
};

export default useHeader;
