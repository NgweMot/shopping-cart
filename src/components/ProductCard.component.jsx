import React, { useContext } from "react";
import RatingComponent from "./Rating.component";

const ProductCardComponent = ({
  product: {
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
 
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow p-5 flex flex-col items-start gap-5">
      <div className="">
        <img src={image} className="h-40" alt="product image" />
      </div>
      <h3 className="font-bold line-clamp-2">{title}</h3>
      <RatingComponent rate={rate}/>
      <div className="flex justify-between items-end w-full ">
        <p>{price}</p>
        <button className="hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCardComponent;
