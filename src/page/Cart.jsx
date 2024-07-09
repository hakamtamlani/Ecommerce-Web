import { useDispatch, useSelector } from "react-redux";
import { remove, clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import Button from "./Button";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const handleRemoveFromCart = (productId) => {
    dispatch(remove(productId));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <div className="container mx-auto">
      <div className="pt-16 w-full flex sm:flex-col-1 md:flex-col-2 lg:flex-col-4 flex-wrap justify-center items-center">
        <div className="">
          {cartItems.length === 0 ? (
            <p className="font-bold text-2xl">Your cart is empty.</p>
          ) : (
            <ul className="flex sm:flex-col-1 gap-6 md:flex-col-2 lg:flex-col-4 flex-wrap justify-center ">
              {cartItems.map((item) => (
                <li key={item.id} className="mb-4 p-4 lg:mr-4 md:mr-4 border-2">
                  <p className="text-xl font-bold mb-2">Id: {item.id}</p>
                  <p className="text-xl font-bold mb-2">Title: {item.title}</p>
                  <p className="text-lg mb-2">Category: {item.category}</p>
                  <img
                    className="w-full h-48 mb-2 rounded-lg object-cover"
                    src={item.img}
                    alt={item.title}
                  />
                  <p className="text-lg font-bold">Price: ${item.price}</p>
                  <p className="text-lg font-semibold pb-4">
                    Quantity: {item.quantity}
                  </p>
                  <div className="flex justify-center pb-4">
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="px-4  py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 focus:outline-none mr-2"
                    >
                      Remove Item
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {/* <div className="flex flex-col md:flex-row lg:flex-row justify-center mb-4 items-center gap-4">
            <Button type="submit">
              <Link
                to={{
                  pathname: "/confirm",
                  state:
                    cartItems.length > 0
                      ? {
                          totalCost: totalCost,
                          totalQuantity: totalQuantity,
                        }
                      : {},
                }}
              >
                Please Confirm
              </Link>
            </Button>
            <button
              onClick={handleClearCart}
              className="px-4 py-2 bg-green-400  text-white rounded-md hover:bg-green-500 focus:outline-none"
            >
              Clear Cart
            </button>
            <div className="font-bold px-3 py-2 rounded-md border border-green-400">
              Total Cost: ${totalCost.toFixed(2)}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
