const Container = ({ children }) => {
  return (
    <div className='mx-auto w-full px-4 xl:max-w-screen-2xl 2xl:px-0'>
      {children}
    </div>
  );
};

export default Container;
