'use client';
import useAuth from '@/Hook/useAuth';
import Link from 'next/link';
import { useState } from 'react';
import { BiSolidContact } from 'react-icons/bi';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { FaUserDoctor } from 'react-icons/fa6';
import { GiTireIronCross } from 'react-icons/gi';
import { IoHomeSharp } from 'react-icons/io5';
import { MdRoundaboutLeft } from 'react-icons/md';
import { TbLogin2 } from 'react-icons/tb';
import LoggedInUser from './LoggedInUser';

const navItems = [
  {
    id: 0,
    name: 'Home',
    link: '/',
    icon: <IoHomeSharp />,
  },
  {
    id: 1,
    name: 'About',
    link: '/about',
    icon: <MdRoundaboutLeft />,
  },
  {
    id: 2,
    name: 'Doctors',
    link: '/doctors',
    icon: <FaUserDoctor />,
  },
  {
    id: 3,
    name: 'Contact Us',
    link: '/contact',
    icon: <BiSolidContact />,
  },
];

const HeaderNavItems = () => {
  const [showNav, setShowNav] = useState(false);
  const { user, logout } = useAuth();
  return (
    <>
      {/* toggle button */}
      <div onClick={() => setShowNav(!showNav)} className='block md:hidden'>
        {showNav ? (
          <GiTireIronCross
            className={`cursor-pointer text-4xl text-white transition duration-300`}
          />
        ) : (
          <BsFillMenuButtonWideFill
            className={`cursor-pointer text-4xl text-white transition duration-300`}
          />
        )}
      </div>
      <nav
        className={`${
          showNav ? 'undo-transform-custom' : 'transform-custom'
        } absolute left-0 top-24 !z-50 flex w-full flex-col justify-center gap-3 rounded-lg bg-deep-teal-950/50 p-4 backdrop-blur-lg transition duration-300 md:static md:left-0 md:top-0 md:w-fit md:flex-row md:rounded-none md:bg-slate-100/0 md:p-0`}
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            onClick={() => setShowNav(false)}
            href={item.link}
            className='flex w-fit items-center gap-2 rounded-full bg-gradient-to-l from-hit-pink-300 to-deep-teal-400 px-5 py-1 font-semibold text-white transition duration-100 ease-in-out hover:scale-105 hover:bg-gradient-to-r'
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
        {user ? (
          <LoggedInUser user={user} logout={logout} />
        ) : (
          <Link
            href={'/login'}
            onClick={() => setShowNav(false)}
            className='flex w-fit items-center gap-2 rounded-full bg-gradient-to-l from-hit-pink-300 to-deep-teal-400 px-5 py-1 font-semibold text-white transition duration-100 ease-in-out hover:scale-105 hover:bg-gradient-to-r'
          >
            <TbLogin2 /> Login
          </Link>
        )}
      </nav>
    </>
  );
};

export default HeaderNavItems;
