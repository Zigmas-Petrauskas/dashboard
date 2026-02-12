import "./serverCard.scss";

const ServerCard = ({ server, onClick }) => {
  return (
    <div className={`server-card ${server.status}`} onClick={onClick}>
      <h3>{server.name}</h3>
      <p>
        Statusas:{" "}
        <span className={`server-${server.status}`}>
          {server.status.charAt(0).toUpperCase() + server.status.slice(1)}
        </span>
      </p>
    </div>
  );
};

export default ServerCard;
