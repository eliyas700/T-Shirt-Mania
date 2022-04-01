import React, { useState } from "react";

import useTShirts from "../../Hooks/useTShirts";
import Cart from "../Cart/Cart";
import TshirtItem from "../TShirtItem/TshirtItem";

const Home = () => {
  const [tShirts, setTShirts] = useTShirts();
  const [cart, setCart] = useState([]);
  const addToCart = (tShirt) => {
    const existanceCheck = cart.find((item) => item._id === tShirt._id);
    if (!existanceCheck) {
      const newCart = [...cart, tShirt];
      setCart(newCart);
    } else {
      alert("Dude,It's already in The Cart");
    }
  };
  const removeFromCart = (id) => {
    const restTShirts = cart.filter((tShirt) => tShirt._id !== id);
    setCart(restTShirts);
  };
  return (
    <div className="home-container grid grid-cols-[3fr,1fr]">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 ml-7">
        {tShirts.map((tShirt) => (
          <TshirtItem
            key={tShirt._id}
            addToCart={addToCart}
            tShirt={tShirt}
          ></TshirtItem>
        ))}
        {/* {tShirts.map((tShirt) => (
          <TshirtItem key={tShirt._id} tShirt={tShirt}></TshirtItem>
        ))} */}
      </div>
      <div className="bg-cyan-300 h-[80vh] rounded-xl ml-2 sticky top-0 text-black overflow-y-scroll">
        <h3>Cart Details</h3>
        <p className="text-xl font-semibold ">Total Items:{cart.length}</p>
        {cart.map((tShirt) => (
          <Cart
            key={tShirt._id}
            removeFromCart={removeFromCart}
            tShirt={tShirt}
          ></Cart>
        ))}
      </div>
    </div>
  );
};

export default Home;
