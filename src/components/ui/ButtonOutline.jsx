const ButtonOutline = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className='hover:border-hit-pink-400 active:border-hit-pink-500 text-hit-pink-300 border-hit-pink-300 hover:text-hit-pink-400 active:text-hit-pink-500 rounded-xl border bg-white px-8 py-4 text-xl font-bold transition'
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
