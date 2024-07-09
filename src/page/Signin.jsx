import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Button from "./Button";

const Signin = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    setData((prevData) => ({ ...prevData, [name]: value }));
    if (email && password) {
      setError("");
      return;
    }
  };
  const displayMessage = (message) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage("");
      setError("");
    }, 1000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const res = await fetch(
        "https://website-ecomerce-default-rtdb.firebaseio.com/userData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to save user data");
      }
      await createUserWithEmailAndPassword(auth, email, password);
      setData({
        email: "",
        password: "",
      });
      setError("");
    } catch (error) {
      displayMessage("Successfully submitted");
      setData({ email: "", password: "" });
    }
  };

  return (
    <div className="bg-gray-300 h-screen">
      <div className="container mx-auto flex pt-16 flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Sign In </h1>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-4  max-w-md"
          onSubmit={handleSubmit}
        >
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
          <div className="flex items-center  justify-around">
            <Button type="submit">Sign In</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
