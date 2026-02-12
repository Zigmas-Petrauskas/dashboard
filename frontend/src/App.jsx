import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./features/auth/pages/MainPage";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainPage />} />

      {/* jei URL neegzistuoja, nukreipia į login */}
      <Route path="*" element={<Navigate to="/*" />} />
    </Routes>
  );
};

export default App;
