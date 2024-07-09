import { useRef, useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarker,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const emailInputRef = useRef(null);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    if (!enteredEmail || !enteredEmail.includes("@gmail.com")) {
      alert("Please enter a valid email address");
      return;
    }
    setEmail("");
    emailInputRef.current.value = "";
    console.log("Submitted email:", enteredEmail);
  };
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section  text-white bg-gray-700">
      <div className="container-fluid">
        {/* Footer CTA */}
        <div className="footer-cta border-b border-solid border-gray-300 pt-5 pb-5">
          <div className="flex flex-wrap">
            {/* Find Us */}
            <div className="w-full md:w-1 justify-center items-center flex lg:w-1/3 mb-4 md:mb-0">
              <div className="items-center gap-4 justify-center flex">
                <p className="">
                  <FaMapMarker size={30} />
                </p>
                <div className="flex flex-col">
                  <h4 className="text-white text-xl font-semibold mb-0.5">
                    Find us
                  </h4>
                  <span className="text-white text-sm">
                    Main Tariq Road Karachi
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 justify-center items-center flex lg:w-1/3 mb-4 md:mb-0">
              <div className="items-center gap-4 justify-center flex">
                <p className="">
                  <FaEnvelope size={30} />
                </p>
                <div className="flex flex-col">
                  <h4 className="text-white text-xl font-semibold mb-0.5">
                    Email us
                  </h4>
                  <span className="text-white text-sm">
                    Example021@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 justify-center items-center flex lg:w-1/3 mb-4 md:mb-0">
              <div className="items-center  gap-4 justify-center flex">
                <p className="">
                  <FaPhone size={30} />
                </p>
                <div className="flex flex-col">
                  <h4 className="text-white text-xl font-semibold mb-0.5">
                    Call us
                  </h4>
                  <span className="text-white text-sm">02143353534</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="footer-content p-12 pt-5 pb-5">
          <div className="flex sm:gap-4 md:gap-6 lg:gap-8 items-center justify-center flex-wrap">
            {/* Follow Us */}
            <div className="w-full flex justify-center md:w-1/2 lg:w-1/6 mb-4 md:mb-0">
              <div className="footer-widget">
                <div className="footer-logo mb-5">
                  <span className="text-white block text-xl font-bold mb-5">
                    Follow us
                  </span>
                  <div className="flex gap-4 ">
                    <p className="hover:text-green-500">
                      <FaFacebook size={30} />
                    </p>
                    <p className="hover:text-green-500">
                      <FaLinkedin size={30} />
                    </p>
                    <p className="hover:text-green-500">
                      <FaInstagram size={30} />
                    </p>
                  </div>
                </div>
                <div className="footer-text mb-5">
                  <p className="text-white text-sm leading-7">
                    Follow us on social media for updates and more.
                  </p>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="w-full md:w-1/2 flex justify-center lg:w-1/4 mb-5">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3 className="text-white text-xl font-semibold mb-6 relative before:content-[''] before:absolute before:bottom-[-15px] before:h-0.5 before:w-12 before:left-0">
                    Useful Links
                  </h3>
                </div>
                <ul>
                  <li>
                    <Link to="/Home" className="text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" className="text-white">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart" className="text-white">
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Subscribe */}
            <div className="w-full md:w-1/2 flex justify-center lg:w-1/4 mb-4 md:mb-0">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3 className="text-white text-xl font-semibold mb-10 relative before:content-[''] before:absolute before:bottom-[-15px] before:h-0.5 before:w-12 before:left-0">
                    Subscribe
                  </h3>
                </div>
                <div className="footer-text mb-5">
                  <p className="text-white text-sm">
                    Don`t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="flex">
                  <div className="form flex gap-4">
                    <p>
                      <input
                        type="text"
                        placeholder="Enter Email"
                        value={email}
                        onChange={handleEmailChange}
                        ref={emailInputRef}
                        className="w-full border rounded-md text-white px-7 py-2 border-solid border-[#2e2e2e] bg-[#2e2e2e]"
                      />
                    </p>
                    <button
                      onClick={handleSubmit}
                      className="text-white border px-4 py-2 border-solid rounded-md right-0 top-0 bg-green-500"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex w-full h-12 justify-center items-center text-white bg-gray-700 ">
          <p className="md:font-bold text-xl">
            <span className="mr-2">&copy; {currentYear}</span>
            Made By Hakam Tamlani
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
