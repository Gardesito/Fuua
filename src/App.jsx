import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Principal } from "./componentes/principal/principal";
import { Wraps } from "./componentes/wraps";
import { Finalizar } from "./componentes/finalizar";
import { Nav } from "./componentes/navbar/navbar";
import { Hero } from "./componentes/hero/hero";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Nav />} /> */}

          <Route path="/" element={<Principal />} />
          <Route path="/wraps" element={<Wraps />} />
          <Route path="/finalizar" element={<Finalizar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
