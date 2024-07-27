import React, { useContext } from "react";
import { GeneralContext } from "../provider/ContextProvider";
import { ProductCard } from ".";

const ProductSectionComponent = () => {
  const { products } = useContext(GeneralContext);
  return (
    <section>
      <p className="my-3">Available Product Lists</p>
      <div className=" dark:bg-gray-800 dark:border-gray-700 md:grid md:grid-cols-3 grid grid-cols-1 gap-3 md:gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSectionComponent;
