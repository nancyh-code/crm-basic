import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/5 bg-sky-600 px-5 py-10">
        <h2 className="text-3xl text-slate-900 font-bold text-center">
          CRM-Clientes
        </h2>
        <nav className="mt-10">
          <Link
            className="text-2xl text-slate-900 block mt-2 hover:text-slate-600"
            to="/clientes"
          >
            Clientes
          </Link>
          <Link
            className="text-2xl text-slate-900 block mt-2 hover:text-slate-600"
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
