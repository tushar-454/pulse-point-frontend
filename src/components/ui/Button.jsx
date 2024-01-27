const Button = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className='bg-hit-pink-300 hover:bg-hit-pink-400 active:bg-hit-pink-500 rounded-xl px-8 py-4 text-xl font-bold text-white transition'
    >
      {children}
    </button>
  );
};

export default Button;
