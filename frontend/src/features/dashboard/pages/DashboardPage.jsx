import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ServerPage from "../../servers/pages/ServerPage";
import ServerInfoPage from "../../servers/pages/ServerInfoPage";
import useDashboard from "../hooks/useDasboard";
import useServers from "../../servers/hooks/useServers";
import { ThemeProvider, useTheme } from "../../../ui/theme/ThemeProvider";
import "./dashboardPage.scss";

const DashboardPage = ({ onLogout }) => {
  const { activePage, setActivePage } = useDashboard();
  const { servers, selectedServer, selectServer, deselectServer, toggleServer } = useServers();

  return (
    <ThemeProvider>
      <DashboardContent
        onLogout={onLogout}
        activePage={activePage}
        setActivePage={setActivePage}
        servers={servers}
        selectedServer={selectedServer}
        selectServer={selectServer}
        deselectServer={deselectServer}
        toggleServer={toggleServer}
      />
    </ThemeProvider>
  );
};

// Atskiro komponento viduje naudojame useTheme
const DashboardContent = ({
  onLogout,
  activePage,
  setActivePage,
  servers,
  selectedServer,
  selectServer,
  deselectServer,
  toggleServer,
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header loading={false} onLogout={onLogout} />
      <div className="layout">
        <Sidebar setActivePage={setActivePage} />
        <main className="content">
          {activePage === "dashboard" && (
            <section>
              <h1>Dashboard</h1>
              <p>Pasirink veiksmą iš šoninio meniu</p>
            </section>
          )}

          {activePage === "server" && !selectedServer && (
            <ServerPage servers={servers} onSelectServer={selectServer} />
          )}

          {selectedServer && (
            <ServerInfoPage
              server={selectedServer}
              onBack={deselectServer}
              onToggle={toggleServer}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
