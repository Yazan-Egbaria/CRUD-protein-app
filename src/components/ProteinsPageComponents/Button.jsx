const Button = ({ text, color, handleEvent }) => {
  return (
    <button
      className={`w-52 rounded px-4 py-2 font-bold text-white transition-all duration-300 ${color}`}
      onClick={handleEvent}
    >
      {text}
    </button>
  );
};

export default Button;
