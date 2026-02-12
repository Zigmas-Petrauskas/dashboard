import { useState } from "react";

// Pradiniai serveriai su papildoma info
const initialServers = [
  {
    id: 1,
    name: "Serveris #1",
    status: "online",
    cpu: 25,
    ram: 50,
    gpu: 30,
    processes: [
      { id: 1, name: "Apache server", running: true },
      { id: 2, name: "Node.js app", running: true },
    ],
  },
  {
    id: 2,
    name: "Serveris #2",
    status: "offline",
    cpu: 0,
    ram: 0,
    gpu: 0,
    processes: [{ id: 1, name: "Nėra proceso", running: false }],
  },
  {
    id: 3,
    name: "Serveris #3",
    status: "online",
    cpu: 75,
    ram: 60,
    gpu: 40,
    processes: [
      { id: 1, name: "Node.js app", running: true },
      { id: 2, name: "MySQL", running: true },
    ],
  },
];

const useServers = () => {
  const [servers, setServers] = useState(initialServers);
  const [selectedServer, setSelectedServer] = useState(null);

  // Pasirink serverį detalėms
  const selectServer = (server) => setSelectedServer(server);

  // Grįžti į sąrašą
  const deselectServer = () => setSelectedServer(null);

  // Keisti serverio statusą
  const toggleServer = (id) => {
    setServers((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: s.status === "online" ? "offline" : "online" } : s,
      ),
    );

    if (selectedServer?.id === id) {
      setSelectedServer((prev) => ({
        ...prev,
        status: prev.status === "online" ? "offline" : "online",
      }));
    }
  };

  return {
    servers,
    selectedServer,
    selectServer,
    deselectServer,
    toggleServer,
  };
};

export default useServers;
