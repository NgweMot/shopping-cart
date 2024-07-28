import React from "react";

const FooterComponent = () => {
  const date = new Date();
  return (
    <>
      <div className=" h-6 mt-10"></div>
      <footer className="fixed bottom-0 w-full bg-gray-800 text-white text-center p-2 left-1/2 transform -translate-x-1/2 max-w-[1280px]">
        <span className="block text-sm py-2 text-white sm:text-center">
          © {date.getFullYear()}
          <a href="#" className="underline hover:text-gray-200 ms-2">
            NGM
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default FooterComponent;
