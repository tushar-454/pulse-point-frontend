const ButtonOutlineHover = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className='block w-full rounded-xl border border-hit-pink-300 bg-white px-8 py-3 text-lg font-bold text-hit-pink-300 transition hover:border-hit-pink-300 hover:bg-hit-pink-300 hover:text-white active:border-hit-pink-400 active:bg-hit-pink-400 active:text-white'
    >
      {children}
    </button>
  );
};

export default ButtonOutlineHover;
