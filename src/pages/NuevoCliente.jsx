import React from "react";
import Formulario from "../components/Formulario";

const NuevoCliente = () => {
  return (
    <>
      <h1 className="text-3xl text-sky-600 font-bold">Nuevo Cliente</h1>
      <p className="mt-3">
        Debes rellenar los siguientes campos para registrar un cliente
      </p>
      <Formulario />
    </>
  );
};

export default NuevoCliente;
