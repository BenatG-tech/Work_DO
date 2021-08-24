import React from "react";
import { STHeader, STFooter } from "./EstilosComponentes";

function cabecera() {
  return (
    <STHeader>
      <h1>Work DO!</h1>
    </STHeader>
  );
}
function pie() {
  return (
    <STFooter>
      <p>Work DO! by BeñatG   -   Donate</p>
    </STFooter>
  );
}
export { cabecera, pie };
