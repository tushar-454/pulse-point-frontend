const Button = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className='rounded-xl bg-hit-pink-300 px-8 py-4 text-xl font-bold text-white transition hover:bg-hit-pink-400 active:bg-hit-pink-500'
    >
      {children}
    </button>
  );
};

export default Button;
