'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const LoggedInUser = ({ user, logout }) => {
  const [userMenu, setUserMenu] = useState(false);
  const { displayName, email, photoURL } = user;
  return (
    <div className='relative'>
      <Image
        width={50}
        height={50}
        src={photoURL}
        alt='user'
        className='h-10 w-10 cursor-pointer rounded-full'
        onClick={() => setUserMenu(!userMenu)}
      />
      {/* dropdown  */}
      <div
        className={`${
          userMenu ? 'scale-y-100' : 'scale-y-0'
        } absolute right-0 top-16 origin-top rounded-xl bg-white p-4 shadow-2xl transition-all`}
      >
        <p className='text-xl font-bold'>{displayName}</p>
        <p>{email}</p>
        <div className='my-3 flex flex-col gap-2'>
          <Link
            className='rounded-lg bg-slate-100 p-2 font-semibold transition-all hover:bg-slate-200 active:bg-slate-300'
            href='/dashboard'
          >
            Dashboard
          </Link>
          <Link
            className='rounded-lg bg-slate-100 p-2 font-semibold transition-all hover:bg-slate-200 active:bg-slate-300'
            href='/profile'
          >
            Profile
          </Link>
        </div>
        <button
          onClick={logout}
          className='w-full rounded-full bg-deep-teal-900 px-4 py-2 text-white transition-all active:scale-105'
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default LoggedInUser;
