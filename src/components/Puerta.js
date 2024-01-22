import React, { useState } from "react";

export function Puerta() {
  const [estado, setEstado] = useState(process.env.PUBLIC_URL + "/images/puertaAbierta.png");

  const abrir = () => {
    setEstado(process.env.PUBLIC_URL + "/images/puertaAbierta.png");
  };

  const cerrar = () => {
    setEstado(process.env.PUBLIC_URL + "/images/puertaCerrada.png");
  };

  return (
    <div>
      <h3>Abrir o Cerrar puerta</h3>
      <p><img width="100px" src={estado} alt={estado.includes("Abierta") ? "Puerta Abierta" : "Puerta Cerrada"} /></p>

      <p>
        <button onClick={abrir}>Abrir</button>
        <button onClick={cerrar}>Cerrar</button>
      </p>
    </div>
  );
}
