import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";


const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex justify-between items-center p-4 ">
      <div className="flex gap-8"> < img className="h-10 w-12 rounded-full" src={logo} alt="Logo Image" />
      <h1 className="text-2xl font-semibold  text-gray-900 dark:text-white">One Click Shopping</h1></div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white">Home</Link>
          </li>
          <li>
            <Link to="/cart" className="text-white">
              Cart ({cartCount})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
