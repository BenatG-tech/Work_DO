import React from "react";
import { cabecera, pie } from "./HtmlStructure";
import { STApp, STBody } from "./EstilosComponentes";
import Inicioapp from "./Inicio";
//import './App.css';

function App() {
  return (
    <STApp>
      {cabecera()}
      <STBody>
        <Inicioapp />
      </STBody>
      {pie()}
    </STApp>
  );
}

export default App;
