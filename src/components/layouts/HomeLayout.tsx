import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F172A]">
      <NavBar />
      <div className="max-w-[1600px] w-full mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
