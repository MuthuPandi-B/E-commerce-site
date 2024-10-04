import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ addToCart, removeFromCart, cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error(error));
  }, []);

  const handleCartToggle = (product) => {
    const isInCart = cart.some((item) => item.id === product.id);
    isInCart ? removeFromCart(product.id) : addToCart(product);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 shadow rounded">
          <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-4" />
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-700 mb-2">${product.price}</p>
          <button
            onClick={() => handleCartToggle(product)}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            {cart.some((item) => item.id === product.id) ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
