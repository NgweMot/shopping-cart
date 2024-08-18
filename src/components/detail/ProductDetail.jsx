import React, { useContext } from "react";
import { GeneralContext } from "../../provider/ContextProvider";
import { Link, useParams } from "react-router-dom";
import RatingComponent from "../Rating.component";
import BreadcrumbComponent from "../Breadcrumb.component";

const ProductDetail = () => {
  const { products } = useContext(GeneralContext);
  const { id } = useParams();
  const currentProduct = products.find((product) => product.id == id);
  return (
    <div className="">
      <BreadcrumbComponent currentPageTitle={"Products Detail"} />
      <Link
        to={"/"}
        className=" bg-white border lg:grid lg:grid-cols-12 border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 py-6"
      >
        <img
          className="block h-60 items-center align-middle lg:col-span-6 mx-auto"
          src={currentProduct.image}
          alt=""
        />
        <div className="justify-between p-4 space-y-4 leading-normal lg:col-span-6 mx-auto">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {currentProduct.title}
          </h5>
          <p className="inline-block bg-gray-200 px-2 py-1 rounded">
            {currentProduct.category}
          </p>
          <div className="flex flex-col">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {currentProduct.description}
            </p>
            <RatingComponent rate={currentProduct.rating.rate} />
            <div className="flex justify-between items-center w-full ">
              <p>Price:({currentProduct.price})</p>
              <button className="hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductDetail;
