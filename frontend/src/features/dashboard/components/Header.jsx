import { FaServer, FaBell, FaUserCircle } from "react-icons/fa";
import Spinner from "../../../ui/loaders/Spinner";
import { useTheme } from "../../../ui/theme/ThemeProvider"; // <- naudojame ThemeProvider
import { useState } from "react";
import "./header.scss";

const Header = ({ loading = false, onLogout }) => {
  const { theme, toggleTheme, ThemeIcon } = useTheme();

  // Notification state
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const toggleNotifications = () => setNotificationsOpen((prev) => !prev);

  // Spinner spalva paveldima nuo theme
  const spinnerColor = theme === "dark" ? "#e5e7eb" : "#0f172a";

  return (
    <header className={`header ${theme}`}>
      {/* LEFT */}
      <div className="header-left">
        <div className="header-logo">
          <FaServer className="logo-icon" />
          <span>VPS Valdymo sistema</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="header-right">
        {loading && <Spinner size={18} color={spinnerColor} />}

        {/* Theme toggle */}
        <button className="header-icon theme-toggle" onClick={toggleTheme}>
          <ThemeIcon />
        </button>

        {/* Notifications */}
        <div className="notification-wrapper">
          <button className="header-icon" onClick={toggleNotifications}>
            <FaBell />
          </button>

          {notificationsOpen && (
            <div className="notification-dropdown">
              <p>Naujų pranešimų nėra</p>
            </div>
          )}
        </div>

        {/* Logout */}
        <button className="header-icon user" onClick={onLogout}>
          <FaUserCircle />
        </button>
      </div>
    </header>
  );
};

export default Header;
