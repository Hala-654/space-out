import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MissionsPage from "./pages/MissionsPage/MissionsPage";
import AstronautsPage from "./pages/AstronautsPage/AstronautsPage";

import "./App.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/astronauts" element={<AstronautsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
