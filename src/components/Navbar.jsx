import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCentralState } from "../page/CenteralState";
import { PiBagSimple } from "react-icons/pi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const { showPopup } = useCentralState();
  return (
    <div className="fixed top-0 flex h-16  bg-gray-600 w-full">
      <div className="flex items-center justify-end">
        <div
          onClick={() => setNav(!nav)}
          className="sm:hide md:show lg:hidden cursor-pointer"
        >
          <AiOutlineMenu size={30} className="text-white" />
        </div>
        <ul className="text-xl pl-5 flex items-center gap-8 text-white">
          <Link to="/about" className="flex items-center">
            About
          </Link>
          <Link to="/product" className="flex items-center">
            Product
          </Link>
          <Link to="/contact" className="flex items-center">
            Contact
          </Link>
        </ul>
      </div>
      <div className="w-full flex justify-end">
        <div className="hidden sm:flex gap-2 justify-center items-center mr-6 text-white">
          <p className="w-24 flex justify-center py-2 bg-green-400 rounded-md">
            <Link to="/signup">SignUp </Link>
            {showPopup && (
              <div className="fixed top-0 right-0 m-4 bg-white text-green-500 p-4 rounded shadow-lg">
                <p className="text-xl font-semibold">successfully added</p>
              </div>
            )}
          </p>
          <p className="ml-4 px-4 py-2 rounded-md border border-green-500 hover:text-white">
            <Link to="/signin">SignIn </Link>
          </p>
        </div>
        <button className="border border-green-500  text-white hidden md:flex items-center  px-8 m-3 mr-6 rounded-md">
          <Link to="/cart" className="flex  items-center">
            <span className=" text-white gap-2 items-center flex justify-center rounded-full ">
              {cartItems.length}
              <PiBagSimple className=" size-6 " />
            </span>
          </Link>
        </button>
      </div>
      {nav && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/80 z-10"></div>
      )}
      <div
        className={`fixed ${
          nav ? "left-0" : "-left-full"
        } w-[300px] h-screen bg-white z-10 duration-300`}
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <Link to="/about" className="text-xl py-4 flex">
              About
            </Link>
            <Link to="/product" className="text-xl py-4 flex">
              Product
            </Link>
            <Link to="/contact" className="text-xl py-4 flex">
              Contact
            </Link>
            <Link to="/cart" className="text-xl py-4 gap-2 flex">
              <PiBagSimple size={25} className="mr-2" />
              <span className="text-red-600 text-bold">{cartItems.length}</span>
              Cart
            </Link>
            <div className="flex flex-col text-xl gap-4">
              <p className="w-24 flex justify-center py-2 border  bg-green-300 rounded-3xl">
                {" "}
                <Link to="./signup">SignUp </Link>
              </p>
              <p className="ml-4 ">
                <Link to="./signin">SignIn </Link>
              </p>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
