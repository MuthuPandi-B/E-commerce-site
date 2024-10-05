import React, { useState } from "react";

const ProductDescription = ({ description }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  // Toggle the text display
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
      <p className="text-gray-700">
        {isReadMore ? description : `${description.substring(0, 100)}...`}
      </p>

      {/* Button to toggle between 'Read More' and 'Read Less' */}
      <button
        onClick={toggleReadMore}
        className="mt-2 text-blue-500 hover:underline focus:outline-none"
      >
        {isReadMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ProductDescription;
