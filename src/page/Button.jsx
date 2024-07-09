const Button = ({ type, children }) => {
  return (
    <div>
      <button
        className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type={type}
      >
        {children}
      </button>
    </div>
  );
};


export default Button;
