import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/Formulario";

const EditarCliente = () => {
  const [cliente, setCliente] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  // console.log(id);

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      // setIsLoading(!isLoading);
      try {
        const url = `${import.meta.env_API_URL}/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(!isLoading);
    };

    obtenerClienteAPI();
  }, []);

  return (
    <>
      <h1 className="font-black text-3xl text-sky-700">Editar Cliente</h1>
      <p className="mt-3 text-lg">
        Utiliza los siguientes campos para modificar los datos del cliente
      </p>
      {cliente?.nombre ? (
        <Formulario cliente={cliente} isLoading={isLoading} />
      ) : (
        <p className="text-red-500">Error: Cliente ID no registrado</p>
      )}
    </>
  );
};

export default EditarCliente;
