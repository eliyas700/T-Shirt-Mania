import React from "react";

const Cart = ({ tShirt, removeFromCart }) => {
  return (
    <div className="flex justify-between rounded-xl border-4 border-slate-800 py-6 px-4 mb-4 shadow-xl">
      <h2>{tShirt.name}</h2>
      <button
        className="bg-red-600 px-4 rounded-full py-2 text-white"
        onClick={() => removeFromCart(tShirt._id)}
      >
        X
      </button>
    </div>
  );
};

export default Cart;
