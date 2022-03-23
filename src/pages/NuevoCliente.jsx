import React from "react";
import Formulario from "../components/Formulario";

const NuevoCliente = () => {
  return (
    <>
      <h2 className="font-black text-3xl text-sky-600">Nuevo Cliente</h2>
      <p className="mt-3">
        Llena los siguientes campos para registrar un cliente
      </p>
      <Formulario />
    </>
  );
};

export default NuevoCliente;
