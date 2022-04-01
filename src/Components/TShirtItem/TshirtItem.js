import React from "react";

const TshirtItem = (props) => {
  console.log(props);
  const { name, price, picture } = props.tShirt;
  return (
    <div className="border-8 p-5 rounded-lg shadow-xl">
      <img className="h-[350px] mx-auto" src={picture} alt="" />
      <h4 className="text-xl font-serif font-bold">{name}</h4>
      <p>
        Price:{" "}
        <small className="text-orange-500 font-semibold text-lg">
          {" "}
          $ {price}
        </small>{" "}
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add To Cart
      </button>
    </div>
  );
};

export default TshirtItem;
