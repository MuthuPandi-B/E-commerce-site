import React from "react";
import PaymentComponent from "../Components/PaymentComponent"; // Adjust the path as necessary

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const totalValue = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = totalValue * 0.1;
  const discountedTotal = totalValue - discount;

  return (
    <div className="p-4">
      {cart.length > 0 ? (
        cart.map((product) => (
          <div key={product.id} className="flex items-center border-b py-4">
            <img src={product.image} alt={product.title} className="h-16 w-16 mr-4 object-contain" />
            <div className="flex-1">
              <h2 className="font-semibold">{product.title}</h2>
              <p>₹{product.price}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => updateQuantity(product.id, -1)}
                  className="px-2 py-1 bg-gray-300 rounded-l"
                >
                  -
                </button>
                <span className="px-4 py-1">{product.quantity}</span>
                <button
                  onClick={() => updateQuantity(product.id, 1)}
                  className="px-2 py-1 bg-gray-300 rounded-r"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(product.id)}
              className="text-white ml-4 bg-red-700  py-2 px-4 rounded"
            >
              Remove from Cart
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    <div className="mt-4 text-right">
  <p className="text-lg font-semibold">Subtotal: ₹{totalValue.toFixed(2)}</p>
  <p className="text-md text-gray-600">Discount (10%): -₹{discount.toFixed(2)}</p>
  <p className="text-xl font-bold">Total after Discount: ₹{(discountedTotal.toFixed(2))}</p>
 
  <PaymentComponent amount={Math.round(discountedTotal)*100} />
</div>

    </div>
  );
};

export default Cart;
