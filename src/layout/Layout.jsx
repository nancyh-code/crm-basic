import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h2>Desde Layout</h2>
      <Outlet />
    </div>
  );
};

export default Layout;
