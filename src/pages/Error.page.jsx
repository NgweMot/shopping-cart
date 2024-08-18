import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-4xl mb-5">404 Not Found</h1>
      <p>
        Your route path is incorrect.Please, return home{" "}
        <span className="bg-blue-400 rounded-lg px-3 py-2 font-semibold">
          <Link to={"/"}> Home</Link>
        </span>
      </p>
    </div>
  );
};

export default ErrorPage;
