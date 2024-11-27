import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MissionsPage from "./pages/MissionsPage/MissionsPage";
import "./App.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/missions" element={<MissionsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
