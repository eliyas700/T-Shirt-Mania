import React from "react";

import useTShirts from "../../Hooks/useTShirts";
import Cart from "../Cart/Cart";
import TshirtItem from "../TShirtItem/TshirtItem";

const Home = () => {
  const [tShirts, setTShirts] = useTShirts();
  console.log(tShirts);
  return (
    <div className="home-container grid grid-cols-[3fr,1fr]">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 ml-7">
        {tShirts.map((tShirt) => (
          <TshirtItem key={tShirt._id} tShirt={tShirt}></TshirtItem>
        ))}
        {/* {tShirts.map((tShirt) => (
          <TshirtItem key={tShirt._id} tShirt={tShirt}></TshirtItem>
        ))} */}
      </div>
      <div>
        <h3>Cart</h3>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
