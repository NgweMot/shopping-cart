import React from "react";
import { Link } from "react-router-dom";

const BreadcrumbComponent = ({ currentPageTitle }) => {
  return (
    <div className=" w-full flex gap-3 mb-5">
      <Link to={"/"} className="text-gray-600 font-semibold">Home</Link>
      <span>/</span>
      <p className=" font-semibold">{currentPageTitle}</p>
    </div>
  );
};

export default BreadcrumbComponent;
