import React from "react";

const FooterComponent = () => {
  const date = new Date();
  return (
    <div className="flex flex-col min-h-screen mb-3">
      <div className="flex-grow"></div>
      <div className="bg-black ">
        <span className="block text-sm py-4 text-white sm:text-center ">
          © {date.getFullYear()}
          <a href="#" className="underline hover:text-gray-200 ms-2">
            NGM
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default FooterComponent;
