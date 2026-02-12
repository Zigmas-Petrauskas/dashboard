import { FaServer, FaChartBar, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../../../ui/theme/ThemeProvider"; // hook iš ThemeProvider
import "./sidebar.scss";

const Sidebar = ({ setActivePage }) => {
  const { theme } = useTheme(); // gauname current theme

  return (
    <aside className={`sidebar ${theme}`}>
      <nav className="sidebar-nav">
        <Link to="/dashboard/server" onClick={() => setActivePage("server")}>
          <FaServer /> VPS
        </Link>

        <Link to="/dashboard/statistics" onClick={() => setActivePage("statistics")}>
          <FaChartBar /> Statistika
        </Link>

        <Link to="/dashboard/settings" onClick={() => setActivePage("settings")}>
          <FaCog /> Nustatymai
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
