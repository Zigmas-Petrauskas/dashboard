import { FaServer } from "react-icons/fa";
import ServerCard from "../../../ui/cards/ServerCard";
import "./serverPage.scss";

const ServerPage = ({ servers, onSelectServer }) => {
  return (
    <section className="server-page">
      <div className="server-page-header">
        <FaServer className="server-page-icon" />
        <h1>VPS serveriai</h1>
      </div>

      <div className="server-page-content">
        {servers?.map((server) => (
          <ServerCard key={server.id} server={server} onClick={() => onSelectServer(server)} />
        ))}
      </div>
    </section>
  );
};

export default ServerPage;
