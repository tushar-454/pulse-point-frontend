import logo from '@/assets/images/pulse-point.png';
import Image from 'next/image';
import HeaderNavItems from '../HeaderNavItems';
import Container from './Container';

const Header = () => {
  return (
    <header className='bg-[#06332E]'>
      <Container>
        {/* header wrapper  */}
        <div className='flex w-full items-center justify-between py-2'>
          {/* header logo  */}
          <div>
            <Image src={logo} alt='website logo' className='w-16' />
          </div>
          {/* header navigation navs  */}
          <HeaderNavItems />
        </div>
      </Container>
    </header>
  );
};

export default Header;
