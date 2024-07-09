import Button from "./Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const displayMessage = (message) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    setData({
      name: "",
      email: "",
      password: "",
    });
    setError("");
    displayMessage("Successfully submitted");
  };

  return (
    <div className="bg-gray-300 h-screen">
      <div className="container mx-auto pt-16 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Please Register</h1>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  max-w-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {successMessage && (
            <p className="text-green-500 mb-4">{successMessage}</p>
          )}
          <div className="flex items-center justify-around">
            <Button type="submit">Register</Button>
            <Button type="submit">
              <Link to="/signin">Sign In</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
