const Button = ({ onClick, children, disabled }) => {
  return (
    <>
      <button
        className="bg-blue-600 text-white py-2 px-5 rounded-lg font-semibold hover:bg-blue-500 active:bg-blue-700 disabled:bg-blue-400"
        type="button"
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
