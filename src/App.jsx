import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Principal } from "./componentes/principal/principal";
import { Inicio } from "./componentes/inicio/inicio";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="inicio">About</NavLink>
        </div>

        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
