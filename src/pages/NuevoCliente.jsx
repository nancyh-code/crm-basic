import React from "react";
import Formulario from "../components/Formulario";

const NuevoCliente = () => {
  return (
    <>
      <h1 className="font-black text-3xl text-sky-700">Nuevo Cliente</h1>
      <p className="mt-3 text-lg">
        Llena los siguientes campos para registrar un cliente
      </p>
      <Formulario />
    </>
  );
};

export default NuevoCliente;
