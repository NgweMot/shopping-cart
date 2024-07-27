import React, { useContext } from "react";
import { GeneralContext } from "../provider/ContextProvider";
import CategoryButton from "./CategoryButton";

const CategoriesComponent = () => {
  const { categories } = useContext(GeneralContext);
  return (
    <section className="my-3">
      <p className=" text-gray-600 dark:text-gray-300 font-semibold mb-3">
        Product Categories
      </p>
      <div className="overflow-x-auto whitespace-nowrap scrollbar">
        <CategoryButton categoryName={"all"} current={true} />
        {categories.map((category) => (
          <CategoryButton key={category} categoryName={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesComponent;
