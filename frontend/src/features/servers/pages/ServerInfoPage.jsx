import {
  FaPowerOff,
  FaPlay,
  FaStop,
  FaMicrochip,
  FaMemory,
  FaVideo,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import "./serverInfoPage.scss";

const ServerInfoPage = ({ server, onBack, onToggle }) => {
  if (!server) return null;

  return (
    <section className="server-info-page">
      <button className="back-btn" onClick={onBack}>
        &larr; Grįžti
      </button>

      <h1>{server.name}</h1>
      <p>
        Statusas: <span className={`server-${server.status}`}>{server.status}</span>
      </p>

      {/* CPU / RAM / GPU */}
      <div className="server-stats">
        {["cpu", "ram", "gpu"].map((metric) => (
          <div key={metric} className={`metric ${metric}`}>
            {metric === "cpu" && <FaMicrochip className="icon" />}
            {metric === "ram" && <FaMemory className="icon" />}
            {metric === "gpu" && <FaVideo className="icon" />}
            <span className="label">{metric.toUpperCase()}</span>
            <div className="bar-container">
              <div className="bar" style={{ width: `${server[metric]}%` }} />
            </div>
            <span className="percent">
              {server[metric]}
              {metric === "ram" ? " GB" : "%"}
            </span>
          </div>
        ))}
      </div>

      {/* Vykdomi procesai */}
      <div className="server-processes">
        <h2>Vykdomi procesai</h2>
        <ul>
          {server.processes.map((p) => (
            <li key={p.id}>
              <span className="process-icon">
                {p.running ? (
                  <FaCheck style={{ color: "green" }} />
                ) : (
                  <FaTimes style={{ color: "red" }} />
                )}
              </span>
              <span className="process-name">{p.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Veiksmai */}
      <div className="actions">
        {server.status === "online" ? (
          <button className="action-btn stop" onClick={() => onToggle(server.id)}>
            <FaStop /> Sustabdyti
          </button>
        ) : (
          <button className="action-btn start" onClick={() => onToggle(server.id)}>
            <FaPlay /> Paleisti
          </button>
        )}
        <button className="action-btn restart" onClick={() => onToggle(server.id)}>
          <FaPowerOff /> Perkrauti
        </button>
      </div>
    </section>
  );
};

export default ServerInfoPage;
