import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="pt-16 bg-gray-300">
      <h1 className="font-bold pt-6 pl-14 text-3xl">Contact</h1>

      <div className="w-full container mx-auto p-10  flex flex-col md:flex-row lg:flex-row">
        <div className=" md:mr-6 lg:mr-6 p-8 mb-4 hover:bg-black hover:text-white">
          <FaPhone className="text-3xl mb-2" />
          <h1 className="text-lg font-bold">Mobile Number</h1>
          <h1 className="text-lg font-semibold mb-2">0232423423</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis exercitationem culpa corporis consequatur doloribus.
          </p>
        </div>
        <div className="mb-6 md:mr-6 lg:mr-6 p-8 hover:bg-black hover:text-white">
          <FaMapMarkerAlt className="text-3xl mb-2" />
          <h1 className="text-lg font-bold">Location</h1>
          <h1 className="text-lg font-semibold mb-2">Tariq Road Karachi</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            quibusdam alias adipisci sequi cumque non culpa voluptatibus.
          </p>
        </div>
        <div className="mb-6 md:mr-6 lg:mr-6 p-8 hover:bg-black hover:text-white">
          <FaEnvelope className="text-3xl mb-2 " />
          <h1 className="text-lg font-bold">Email</h1>
          <h1 className="text-lg font-semibold mb-2">john@gmail.com</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            quibusdam alias adipisci sequi cumque non culpa voluptatibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
