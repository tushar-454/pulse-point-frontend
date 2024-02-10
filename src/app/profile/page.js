'use client';
import Container from '@/components/shared/Container';
import { getSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const profile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userSession = async () => {
      const session = await getSession();
      if (session) {
        setUser(session.user);
      }
    };
    userSession();
  }, []);
  return (
    <main className='min-h-screen bg-slate-100'>
      <Container>
        {/* profile wrapper  */}
        <div className='flex flex-col rounded-lg bg-white py-10 md:flex-row'>
          <div className='w-full border-r p-4 md:w-[285px]'>
            <div className='flex w-full flex-col gap-5'>
              <Image
                src={user?.image}
                width={40}
                height={40}
                alt='profile picture'
                className='h-32 w-32 rounded-full border-4 border-transparent ring-4 ring-deep-teal-500'
              />
              <div className='space-y-1'>
                <h1 className='text-2xl font-black'>{user?.name}</h1>
                <p className='text-lg font-medium' contentEditable>
                  {user?.email}
                </p>
                <button
                  type='button'
                  className='max-w-min rounded-lg bg-deep-teal-900 p-2 px-4 text-white'
                >
                  Patient
                </button>
              </div>
            </div>
          </div>
          <div className='w-full p-4 md:flex-grow'>
            <h1>Other profile related information</h1>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default profile;
