const HeaderNavItems = () => {
  return (
    <div>
      <nav className='flex items-center justify-center gap-2'>
        <ul className='flex items-center justify-center gap-2 text-white'>
          <li className='mr-5'>
            <a href='#'>Home</a>
          </li>
          <li className='mr-5'>
            <a href='#'>About</a>
          </li>
          <li className='mr-5'>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <div className='flex items-center justify-center gap-2'>
          <button className='rounded-lg bg-[#FF4C29] px-4 py-2 text-white'>
            Login
          </button>
          <button className='rounded-lg bg-[#FF4C29] px-4 py-2 text-white'>
            Register
          </button>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNavItems;
