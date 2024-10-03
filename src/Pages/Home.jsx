import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div className="md:grid grid-cols-4">
      {data.map((ele) => {
        return (
          <div key={ele.id}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              {/* <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {ele.productId}
              </h2> */}
              <img
                className="rounded-t-lg"
                src={ele.image}
                alt="product Image"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {ele.title}
                </h5>
                <h5 className="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">
                  {ele.price}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {ele.description}
                </p>
              </div>
              <div className="text-center">
                <div>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                   
                  >
                    ReadMore
                  </button>
                  <button
                    type="button"
                    className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => {
                      handleDelete(ele.productId);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
