import React, { useContext } from "react";
import { GeneralContext } from "../provider/ContextProvider";
import CartComponent from "./Cart.component";
import Container from "../container/Container";
import { Link } from "react-router-dom";

const MyCartSectionComponent = () => {
  const { products,carts } = useContext(GeneralContext);
 
  return (
    <>
      <div className="flex flex-col gap-5 ">
        {carts.map((cart) => (
          <CartComponent key={cart.id} cart={cart} />
        ))}
      </div>
      <div className=" absolute bottom-0 left-0 w-full py-14">
        <Container>
          <div className="border-t border-black mt-auto flex justify-end gap-20">
            <div className=" text-end">
              <p className="text-gray-600">Total ($)</p>
              <span className=" text-xl font-bold">66.9</span>
            </div>
            <div className=" text-end">
              <p className="text-gray-600">Tax (10%)</p>
              <span className=" text-xl font-bold">6.9</span>
            </div>
            <div className=" text-end">
              <p className="text-gray-600">Net Total($)</p>
              <span className=" text-2xl font-bold">73.8</span>
            </div>
          </div>
          <div className=" mb-3 text-end py-5">
            <Link className=" border border-black px-3 py-2 text-xl ">Order Now</Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MyCartSectionComponent;
