import React from "react";

const CartComponent = ({ cart }) => {
  return (
    <div className="grid grid-cols-12 border border-black p-3">
      <img className=" w-12 col-span-2 ms-2" src={cart.product.image} alt="" />
      <div className=" col-span-6">
        <p className="font-bold text-lg mb-2">{cart.product.title}</p>
        <p className="text-gray-700">
          Price<span className="ms-1">($ {cart.product.price})</span>
        </p>
      </div>
      <div className="col-span-2">
        <p className=" text-center font-semibold mb-3">Quantity</p>
        <div className="flex justify-center gap-3 items-center">
          <button className="bg-black px-3 py-1 text-white rounded-sm">
            -
          </button>
          <span>{cart.quantity}</span>
          <button className="bg-black px-3 py-1 text-white rounded-sm">
            +
          </button>
        </div>
      </div>
      <div className="col-span-2 text-center flex justify-end items-center">
        <h4 className=" font-semibold">
          $<span className="ms-1">{cart.cost}</span>
        </h4>
      </div>
    </div>
  );
};

export default CartComponent;
