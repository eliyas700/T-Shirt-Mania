import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-[98vw] mx-auto">
      <ul className="flex py-5">
        <li className="mr-10 text-xl font-semibold text-gray-600 hover:text-[#c0392b]">
          <Link to="/home">Home</Link>
        </li>
        <li className="mr-10 text-xl font-semibold text-gray-600 hover:text-[#c0392b]">
          <Link to="/orderreview"> Review</Link>
        </li>
        <li className="mr-10 text-xl font-semibold text-gray-600 hover:text-[#c0392b]">
          <Link to="/about">About</Link>
        </li>
        <li className="mr-10 text-xl font-semibold text-gray-600 hover:text-[#c0392b]">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
