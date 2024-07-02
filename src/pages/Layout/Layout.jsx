import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
