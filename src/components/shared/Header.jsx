import logo from '@/assets/images/pulse-point.png';
import Image from 'next/image';
import HeaderNavItems from '../HeaderNavItems';
import Container from './Container';

const Header = () => {
  return (
    <header className='bg-deep-teal-950'>
      <Container>
        {/* header wrapper  */}
        <div className='relative flex w-full items-center justify-between py-2'>
          {/* header logo  */}
          <div>
            <Image src={logo} alt='website logo' className='w-16' />
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
