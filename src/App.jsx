import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Principal } from "./componentes/principal/principal";
import { Wraps } from "./componentes/wraps";
import { Finalizar } from "./componentes/finalizar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/wraps" element={<Wraps />} />
          <Route path="/finalizar" element={<Finalizar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
