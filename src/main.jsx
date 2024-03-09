import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Principal } from "./componentes/principal/principal.jsx";
/* import { Inicio } from "./componentes/inicio/inicio.jsx";
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Principal />
  </React.StrictMode>
);
