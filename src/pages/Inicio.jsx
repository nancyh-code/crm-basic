import { useState, useEffect } from "react";
import Clientes from "../components/Clientes";

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
      <h1 className="font-black text-3xl text-sky-700">Clientes</h1>
      <p className="mt-3 text-lg">Administar tus clientes</p>
      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-sky-600 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresas</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <Clientes key={cliente.id} cliente={cliente} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Inicio;
