import React from "react";

const Cart = ({ tShirt }) => {
  return (
    <div className="flex justify-between rounded-xl border-4 border-slate-800 py-6 px-4 mb-4 shadow-xl">
      <h2>{tShirt.name}</h2>
      <button>X</button>
    </div>
  );
};

export default Cart;
