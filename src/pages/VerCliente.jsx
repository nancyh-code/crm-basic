import { useParams } from "react-router-dom";

const VerCliente = () => {
  //const params = useParams();
  const { id } = useParams();

  return (
    <div>
      <h1>Ver Cliente</h1>
    </div>
  );
};

export default VerCliente;
