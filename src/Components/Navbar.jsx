import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex justify-between items-center p-4 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">E-Commerce</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-600 dark:text-blue-400">Home</Link>
          </li>
          <li>
            <Link to="/cart" className="text-blue-600 dark:text-blue-400">
              Cart ({cartCount})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
