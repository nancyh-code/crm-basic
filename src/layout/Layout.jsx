import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const urlActual = location.pathname;

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/5 bg-sky-600 px-5 py-10">
        <h2 className="text-3xl text-slate-900 font-bold text-center">
          CRM-Clientes
        </h2>
        <nav className="mt-10">
          <Link
            className={`${
              urlActual === "/clientes" ? "text-slate-600" : "text-slate-900"
            } text-2xl block mt-2 hover:text-slate-600`}
            to="/clientes"
          >
            Clientes
          </Link>
          <Link
            className={`${
              urlActual === "/clientes/nuevo"
                ? "text-slate-600"
                : "text-slate-900"
            } text-2xl block mt-2 hover:text-slate-600`}
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>
      <div className="md:w-3/5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
