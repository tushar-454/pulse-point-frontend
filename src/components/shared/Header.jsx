'use client';
import logo from '@/assets/images/pulse-point.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import HeaderNavItems from '../HeaderNavItems';
import Container from './Container';

const Header = () => {
  useEffect(() => {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        header.classList.add('headerFixed');
      } else if (window.scrollY === 0) {
        header.classList.remove('headerFixed');
      }
    });
  }, []);
  return (
    <header className='bg-deep-teal-950'>
      <Container>
        {/* header wrapper  */}
        <div className='relative flex w-full items-center justify-between py-2'>
          {/* header logo  */}
          <div>
            <Link href={'/'}>
              <Image src={logo} alt='website logo' className='w-16' />
            </Link>
          </div>
          {/* header navigation navs  */}
          <HeaderNavItems />
        </div>
      </Container>
      <div className='reverse h-1 w-full bg-gradient-to-l from-hit-pink-300 to-deep-teal-800'></div>
    </header>
  );
};

export default Header;
