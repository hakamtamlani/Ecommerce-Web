import { Link, useParams } from "react-router-dom";
import { data as productData } from "../data/data.js";
import { useDispatch } from "react-redux";
import { addtocart } from "../redux/cartSlice.js";
import { useCentralState } from "./CenteralState.jsx";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { setPopup } = useCentralState();
  const selectedProduct = productData.find(
    (product) => product.id === parseInt(id)
  );
  const handleAddToCart = () => {
    if (selectedProduct) {
      const { id, title, price, img, category } = selectedProduct;
      dispatch(addtocart({ id, title, price, img, category }));
      setPopup();
    }
  };

  return (
    <div className="container pt-16 pb-2 bg-slate-200 mx-auto max-w-full">
      <h2 className="text-3xl font-bold text-center mb-6">Product Details</h2>
      <div className="max-w-[500px] mx-auto border p-6 bg-white rounded-lg shadow-lg">
        <img
          className="w-full h-[300px] mb-4 rounded-lg"
          src={selectedProduct.img}
          alt={selectedProduct.title}
        />
        <p className="text-xl font-bold mb-2">Title: {selectedProduct.title}</p>
        <p className="text-lg mb-2">Category: {selectedProduct.category}</p>
        <p className="text-lg mb-2">
          Main Category: {selectedProduct.maincategory}
        </p>
        <p className=" mb-4">Description: {selectedProduct.description}</p>
        <p className="text-xl font-bold mb-2">
          Price: ${selectedProduct.price}
        </p>
        <div className="flex gap-2 justify-center">
          <button className="px-2 md:px-4 lg:px-6  sm:py-2 rounded-md bg-green-500 hover:bg-green-600 text-white">
            {" "}
            <Link to="/product">Back to Product Page</Link>
          </button>
          <button
            onClick={() => {
              handleAddToCart();
            }}
            className="px-4 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none mr-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
