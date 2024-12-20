import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
