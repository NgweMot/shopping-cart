import React from "react";

const HeaderComponent = () => {
  return (
    <header>
      <div className=" flex justify-between items-center py-4">
        <h1 className="font-bold text-3xl font-roboto">Online Shop</h1>
        <button
          type="button"
          className="inline-flex relative items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:hover:bg-orange-400 dark:focus:ring-orange-800"
        >
          My Cart
          <span className="inline-flex absolute -top-2 -end-2 items-center justify-center w-6 h-6 ms-2 text-xs font-semibold text-orange-500 bg-gray-600 rounded-full">
            20
          </span>
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
