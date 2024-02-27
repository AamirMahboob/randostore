function Button({ value, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="border border-black p-1 md:p-3 rounded-lg hover:shadow-lg"
    >
      {children}
    </button>
  );
}

export default Button;
