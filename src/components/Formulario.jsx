import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { string } from "yup/lib/locale";
import Spinner from "./Spinner";

const Formulario = ({ cliente, isLoading }) => {
  const navigate = useNavigate();
  const nuevoClienteSchema = yup.object().shape({
    nombre: yup
      .string()
      .min(3, "El nombre es demasiado corto")
      .required("El nombre completo es requerido"),
    empresa: yup.string().required("Empresa es un campo requerido"),
    email: yup
      .string()
      .email("Email no valido")
      .required("El correo electrónico es un campo requerido"),
    telefono: yup
      .number("Número no válido")
      .integer("Número no válido")
      .positive("Número no válido")
      .min(8, "Se requieren al menos 8 digitos"),
  });

  const handleSubmit = async (valores) => {
    try {
      let respuesta;
      if (cliente.id) {
        //Editando un registro
        const url = `http://localhost:4000/clientes/${cliente.id}`;
        respuesta = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(valores),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        //Nuevo Registro
        const url = "http://localhost:4000/clientes";
        respuesta = await fetch(url, {
          method: "POST",
          body: JSON.stringify(valores),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      const resultado = await respuesta.json();
      console.log(resultado);

      navigate("/clientes");
    } catch (error) {
      console.log(error);
    }
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="bg-white mt-10 px-5 py-6 rounded-md shadow-md md:w-3/4 lg-w-48 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        {cliente?.nombre ? "Editar Cliente" : "Agregar Cliente"}
      </h1>
      <Formik
        initialValues={{
          //  Es igual al operador ternario nombre: cliente.nombre ? cliente.nombre : "",
          nombre: cliente?.nombre ?? "",
          empresa: cliente?.empresa ?? "",
          email: cliente?.email ?? "",
          telefono: cliente?.telefono ?? "",
          notas: cliente?.notas ?? "",
        }}
        enableReinitialize={true}
        onSubmit={async (valores, { resetForm }) => {
          await handleSubmit(valores);
          resetForm();
        }}
        validationSchema={nuevoClienteSchema}
      >
        {({ errors, touched }) => {
          // console.log(touched);
          return (
            <Form className="mt-10">
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="nombre">
                  Nombre Completo:
                </label>
                <Field
                  id="nombre"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Nombre Completo"
                  name="nombre"
                />
                <ErrorMessage
                  name="nombre"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="empresa">
                  Empresa:
                </label>
                <Field
                  id="empresa"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Empresa"
                  name="empresa"
                />
                <ErrorMessage
                  name="empresa"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="email">
                  E-mail:
                </label>
                <Field
                  id="email"
                  type="email"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Email"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="telefono">
                  Teléfono:
                </label>
                <Field
                  id="telefono"
                  type="tel"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Teléfono"
                  name="telefono"
                />
                <ErrorMessage
                  name="telefono"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="notas">
                  Notas:
                </label>
                <Field
                  as="textarea"
                  id="notas"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50 h-40"
                  placeholder="Agregar notas"
                  name="notas"
                />
              </div>
              <input
                type="submit"
                value={cliente?.nombre ? "Editar Cliente" : "Agregar Cliente"}
                className=" mt-5 w-full p-3 bg-sky-600 text-slate-50 font-bold uppercase text-lg "
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

//The defaultProps is a React component property that allows you to set default values for the props argument. If the prop property is passed, it will be changed.
Formulario.defaultProps = {
  cliente: {},
  isLoading: false,
};
export default Formulario;
