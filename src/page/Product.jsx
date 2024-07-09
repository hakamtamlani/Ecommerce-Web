import { Link } from "react-router-dom";
import { data as importedData } from "../data/data.js";
import { useState, useEffect } from "react";

const Product = () => {
  const [localData, setLocalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setLocalData(importedData);
    setFilteredData(importedData);
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredData(localData);
    } else {
      setFilteredData(localData.filter((item) => item.category === category));
    }
  };

  useEffect(() => {
    setLocalData(importedData);
  }, []);

  return (
    <div className=" bg-gray-100">
      {/* Filter by Category */}
      <h1 className="text-3xl font-bold pl-10 pt-16  mb-4">Product Page</h1>
      <div className="flex flex-col pl-10 md:pl-10">
        <p className="font-bold text-2xl text-gray-700">Filter By Category</p>
        <div className="flex mb-2 flex-wrap ">
          <button
            onClick={() => setFilteredData(localData)} // Fix this line
            className={`m-1 border-orange-600 px-4 py-2 bg-green-400 rounded-md hover:bg-orange-600 hover:text-white ${
              selectedCategory === "all" && "bg-orange-600 text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => filterByCategory("footware")}
            className={`m-1 border-orange-600 px-3 py-2 text-black  bg-green-300 rounded-md hover:bg-orange-600 hover:text-white ${
              selectedCategory === "footware" && " text-white"
            }`}
          >
            Footware
          </button>
          <button
            onClick={() => filterByCategory("bracelets")}
            className={`m-1 border-orange-600 px-3 py-2 bg-green-300 rounded-md hover:bg-orange-600 hover:text-white ${
              selectedCategory === "bracelets" && " text-white"
            }`}
          >
            Bracelets
          </button>
          <button
            onClick={() => filterByCategory("stitched")}
            className={`m-1 border-orange-600 px-3 py-2 bg-green-300 rounded-md hover:bg-orange-600 hover:text-white ${
              selectedCategory === "stitched" && " text-white"
            }`}
          >
            Stitched
          </button>
          <button
            onClick={() => filterByCategory("kurtis")}
            className={`m-1 border-orange-600 px-3 py-2 bg-green-300 rounded-md hover:bg-orange-600 hover:text-white ${
              selectedCategory === "kurtis" && " text-white"
            }`}
          >
            Kurtis
          </button>
          <button
            onClick={() => filterByCategory("earings")}
            className={`m-1 border-orange-600 px-3 py-2 bg-green-300 rounded-md hover:bg-orange-600 hover:text-white ${
              selectedCategory === "earings" && " text-white"
            }`}
          >
            Earings
          </button>
          <button
            onClick={() => filterByCategory("stoles")}
            className={`m-1 border-orange-600 px-3 py-2 bg-green-300 rounded-md hover:bg-orange-600 hover:text-white ${
              selectedCategory === "stoles" && " text-white"
            }`}
          >
            Stoles
          </button>
        </div>
      </div>
      <div className="container mx-auto ">
        <ul className="flex flex-wrap gap-4 justify-center items-center  sm:flex-col-1 md:flex-col-2 lg:flex-col-4">
          {filteredData.map((val) => (
            <div
              className="flex flex-col border-2 border-bg-black rounded-lg  sm:flex-col-1  md:flex-col-2 lg:flex-col-4"
              key={val.id}
            >
              <Link to={`/details/${val.id}`} className="block mb-4">
                <img
                  className="w-[300px]  flex justify-center h-auto mb-2 rounded-lg"
                  src={val.img}
                  alt={val.title}
                />
                <div className="flex flex-col justify-center items-center">
                  <p className="text-lg font-bold mb-2">
                    Product ID: {val.id}{" "}
                  </p>
                  <p className="text-md mb-2">Category: {val.category}</p>
                  <p className="text-md mb-2">
                    {" "}
                    Main Category: {val.maincategory}{" "}
                  </p>
                  <p className="text-lg font-bold">Price: ${val.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;
