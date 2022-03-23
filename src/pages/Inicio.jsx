import { useState, useEffect } from "react";

const Inicio = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const obtenerClientesAPI = async () => {
      try {
        const url = "http://localhost:4000/clientes";
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setClientes(resultado);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerClientesAPI();
  }, []);

  return (
    <>
      <h1 className="font-black text-3xl text-sky-600">Clientes</h1>
      <p className="mt-3">Administar tus clientes</p>
    </>
  );
};

export default Inicio;
