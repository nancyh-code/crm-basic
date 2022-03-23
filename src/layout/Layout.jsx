import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const urlActual = location.pathname;

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/5 bg-sky-600 px-6 py-10">
        <h2 className="text-2xl text-slate-900 font-black text-center">
          CRM-Clientes
        </h2>
        <nav className="mt-10">
          <Link
            className={`${
              urlActual === "/clientes" ? "text-slate-700" : "text-slate-900"
            } text-xl block mt-2 font-bold hover:text-slate-700`}
            to="/clientes"
          >
            Clientes
          </Link>
          <Link
            className={`${
              urlActual === "/clientes/nuevo"
                ? "text-slate-700"
                : "text-slate-900"
            } text-xl block mt-2 font-bold hover:text-slate-700`}
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>
      <div className="md:w-4/5 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
