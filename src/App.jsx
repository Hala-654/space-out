import { Route, Router, BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </>
  );
}

export default App;
