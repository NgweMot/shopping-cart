import React from "react";
import { BreadcrumbComponent, MyCartSection } from "../components";

const MyCartPage = () => {
  return (
    <>
      <BreadcrumbComponent currentPageTitle={"My Cart"} />
      <MyCartSection />
    </>
  );
};

export default MyCartPage;
