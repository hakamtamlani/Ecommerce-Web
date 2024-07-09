import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

const Confirm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { totalCost, totalQuantity } = location.state;
  const [localTotalCost, setLocalTotalCost] = useState(totalCost);
  const [localTotalQuantity, setLocalTotalQuantity] = useState(totalQuantity);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
  });
  const [error, setError] = useState("");
  const handleSubmit = () => {
    const { name, mobile, location } = formData;
    if (!name || !mobile || !location) {
      setError("Please fill in all fields");
      return;
    }
    console.log("Form Data:", formData);
    dispatch(clearCart());
    setFormData({
      name: "",
      mobile: "",
      location: "",
    });
    setLocalTotalCost(0);
    setLocalTotalQuantity(0);
    setError(""); 
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };
  return (
    <div className="flex flex-col lg:flex-col-2 items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Confirm Your Details</h2>
        <label htmlFor="name" className="block text-sm font-bold text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter The Name"
          value={formData.name}
          onChange={handleInputChange}
          className="px-6 py-2 border border-green-400"
        />
        <label
          htmlFor="mobile"
          className="block text-sm font-bold text-gray-600"
        >
          Mobile No
        </label>
        <input
          type="number"
          id="mobile"
          placeholder="Enter Mobile Number"
          value={formData.mobile}
          onChange={handleInputChange}
          className="px-6 py-2 border border-green-400"
        />
        <label
          htmlFor="location"
          className="block text-sm font-bold text-gray-600"
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          placeholder="Enter the Location"
          value={formData.location}
          onChange={handleInputChange}
          className="px-6 py-2 border border-green-400"
        />
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-center mt-4">
          <button
            className="px-3 py-2 bg-green-500 rounded-md text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-2">Order Summary</h2>
        <p className="font-semibold text-2xl">
          Total Cost:${" "}
          <span className="text-red-500 font-bold">{localTotalCost}</span>
        </p>
        <p className="font-semibold text-2xl">
          Total Quantity:
          <span className="text-red-500 font-bold"> {localTotalQuantity}</span>
        </p>
      </div>
    </div>
  );
};

export default Confirm;
