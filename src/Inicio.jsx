import React, { useState } from "react";
import { STNavBar, STBotonNavBar } from "./EstilosComponentes";
import BloqueInicio from "./BloqueInicio";
import BloqueCategorias from "./BloqueCategorias";
import BloqueHistorico from "./BloqueInicio";
//import BloqueInicio from "./BloqueInicio";

//import FormCIIPC from "./formulariociipc";
//import FormCIINT from "./formulariociint";
//import FormAUIPC from "./formularioauipc";
//import FormAUSMI from "./formularioausmi";
//import FormPP from "./formulariocsv";
//import * as variables from "./services/shared/variablesBBDD.json";

const Inicio = () => {
  const [bloque, setBloque] = useState("INICIO");

  function nabVar() {
    return (
      <STNavBar>
        <STBotonNavBar onClick={() => setBloque("INICIO")}>
          Inicio
        </STBotonNavBar>
        <STBotonNavBar onClick={() => setBloque("CATEGORIAS")}>
          Categorias
        </STBotonNavBar>
        <STBotonNavBar onClick={() => setBloque("HISTORICO")}>
          Historico
        </STBotonNavBar>
        <STBotonNavBar onClick={() => setBloque("SETTINGS")}>
          Setting
        </STBotonNavBar>
      </STNavBar>
    );
  }

  if (bloque === "INICIO") {
    return (
      <div className=" ">
        {nabVar()}
        <BloqueInicio />
      </div>
    );
  } else if (bloque === "CATEGORIAS") {
    return (
      <div className="CIINT">
        {nabVar()}
        <BloqueCategorias />
      </div>
    );
  } else if (bloque === "HISTORICO") {
    return (
      <div className="CIINT">
        {nabVar()}
        <BloqueHistorico />
      </div>
    );
  } else if (bloque === "SETTINGS") {
    return (
      <div className="CIINT">
        {nabVar()}
        <BloqueInicio />
      </div>
    );
  }




  /**const [calculadora, setcalculadora] = useState("");
  const CambiarCalculadora = () => {
    setcalculadora((calculadora) => i);
  };

  function nabVar() {
    return (
      <STNavBar>
        <STBotonNavBar onClick={() => CambiarCalculadora("")}>
          Inicio
        </STBotonNavBar>
        <STBotonNavBar onClick={() => CambiarCalculadora("AUIPC")}>
          Calculadora AU IPC
        </STBotonNavBar>
        <STBotonNavBar onClick={() => CambiarCalculadora("AUSMI")}>
          Calculadora AU SMI
        </STBotonNavBar>
        <STBotonNavBar onClick={() => CambiarCalculadora("CIIPC")}>
          Calculadora CI IPC
        </STBotonNavBar>
        <STBotonNavBar onClick={() => CambiarCalculadora("CIINT")}>
          Calculadora CI Intereses
        </STBotonNavBar>
        <STBotonNavBar onClick={() => CambiarCalculadora("PP")}>
          Calculadora Plazos Procesales
        </STBotonNavBar>
      </STNavBar>
    );
  }

  if (calculadora === "CIIPC") {
    return (
      <div className="CIIPC">
        {nabVar()}
        <FormCIIPC datos={variables.ci_ipc} />
      </div>
    );
  } else if (calculadora === "CIINT") {
    return (
      <div className="CIINT">
        {nabVar()}
        <FormCIINT datos={variables.ci_int} />
      </div>
    );
  } else if (calculadora === "AUIPC") {
    return (
      <div className="AUIPC">
        {nabVar()}
        <FormAUIPC datos={variables.au_ipc} />
      </div>
    );
  } else if (calculadora === "AUSMI") {
    return (
      <div className="AUSMI">
        {nabVar()}
        <FormAUSMI datos={variables.au_smi} />
      </div>
    );
  } else if (calculadora === "PP") {
    return (
      <div className="PP">
        {nabVar()}
        <FormPP datos={variables.au_smi} />
      </div>
    );
  } else {
    return (
      <div className="Inicio">
        {nabVar()}
        <body>
          <h2>Elige sobre que calculadora aplicar los cambios</h2>
        </body>
      </div>
    );
  }*/
};
export default Inicio;
