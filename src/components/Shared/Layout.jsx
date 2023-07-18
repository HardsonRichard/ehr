import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex overflow-auto w-full">{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
