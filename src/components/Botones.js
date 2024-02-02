import React, { useState } from "react";

export function Botones() {
  const [cont, setCont] = useState(0);

  function aumentar() {
    setCont(cont + 1);
    if (cont >= 10) {
        setCont(0);
      }
  }

  function decrementa() {
    if (cont > 0) {
      setCont(cont - 1);
    }
  }

  function restaurar() {
    setCont(0);
  }

  return (
    <>
      <div>El contador es: {cont}</div>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={decrementa}>Decrementar</button>
      <button onClick={restaurar}>Restaurar</button>
    </>
  );
}