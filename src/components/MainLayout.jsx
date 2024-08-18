import React from "react";
import HeaderComponent from "./Header.component";
import FooterComponent from "./Footer.component";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default MainLayout;
