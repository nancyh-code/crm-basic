import { useNavigate } from "react-router-dom";

const Clientes = ({ cliente }) => {
  const navigate = useNavigate();
  const { nombre, empresa, email, telefono, notas, id } = cliente;
  return (
    <tr className="border-b hover:bg-gray-200">
      <td className="p-3">{nombre}</td>
      <td className="p-3">
        <p>
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p>
          <span className="text-gray-800 uppercase font-bold">Tel: </span>
          {telefono}
        </p>
      </td>
      <td className="p-3">{empresa}</td>
      <td className="p-3">
        <button
          type="button"
          className="bg-amber-400 hover:bg-amber-500 block w-full text-white p-2 uppercase font-bold text-xs"
          onClick={() => navigate(`/clientes/${id}`)}
        >
          Ver
        </button>
        <button
          type="button"
          className="bg-sky-600 hover:bg-sky-700 block w-full text-white p-2 uppercase font-bold text-xs mt-2"
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-rose-600 hover:bg-rose-700 block w-full text-white p-2 uppercase font-bold text-xs mt-2"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Clientes;
