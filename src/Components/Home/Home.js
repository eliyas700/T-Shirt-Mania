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
  /* Conditional Rendering 
  
  */
  //If else Condition
  //   const cartLength = cart.length;
  //   let command;
  //   if (cartLength === 0) {
  //     command = <p>Ki re beta Order Kor</p>;
  //   } else if (cartLength == 1) {
  //     command = <p>Ekta kinle Ki hoi naki re?</p>;
  //   } else {
  //     command = <p>Thanks For Shopping</p>;
  //   }
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
        {/* Ternary Rendering
        {cartLength === 3 ? <h2>3ta Kinli Matro?</h2> : <h2>Aaro Ken</h2>}
        and Condition */}
        {/* {cartLength === 4 && <h4>Eliyas 4 ta Kinco?</h4>}
        Or Condtion
        {cartLength === 0 || <h4>I am from or</h4>} */}
        {/* <h2 className="text-orange-600">{command}</h2> */}
      </div>
    </div>
  );
};

export default Home;
