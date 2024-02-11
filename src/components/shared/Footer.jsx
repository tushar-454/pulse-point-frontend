'use client';
import footerLogo from '@/assets/images/footer-light.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { PiCaretDoubleUpBold } from 'react-icons/pi';
import FooterColumn from '../FooterColumn';
import Button from '../ui/Button';
import Container from './Container';

const Footer = () => {
  const pathname = usePathname();
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
    const gotopBtn = document.querySelector('.gotopBtn');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 2500) {
        gotopBtn.style.visibility = 'visible';
        gotopBtn.style.opacity = '100';
      } else {
        gotopBtn.style.visibility = 'hidden';
        gotopBtn.style.opacity = '0';
      }
    });
  }, []);
  return (
    <>
      {pathname.includes('/dashboard') ? (
        <></>
      ) : (
        <footer className='bg-gray-100'>
          <Container>
            {/* footer wrapper  */}
            <div className='grid grid-cols-1 justify-between gap-12 py-10 md:grid-cols-2 md:gap-5 md:py-20 lg:grid-cols-3 xl:grid-cols-4'>
              {/* footer 1st column with logo and social media icons */}
              <div className='space-y-4'>
                {/* logo  */}
                <div>
                  <Image src={footerLogo} alt='footer logo' className='w-60' />
                </div>
                <p>
                  Pulse Point is dedicated to revolutionizing healthcare by
                  providing a cutting-edge platform that connects patients with
                  qualified healthcare professionals. Our mission is to make
                  healthcare accessible, efficient, and personalized for
                  everyone. Join us on our journey to create a healthier world.
                </p>
                <Button>Appointment</Button>
              </div>
              {/* footer 2nd column with links */}
              <FooterColumn
                title={'Quick Links'}
                links={[
                  { id: 0, label: 'About Us', link: '#' },
                  { id: 1, label: 'Services', link: '#' },
                  { id: 2, label: 'Doctors', link: '#' },
                  { id: 3, label: 'Departments', link: '#' },
                  { id: 4, label: 'Online Payments', link: '#' },
                  { id: 5, label: 'Contact Us', link: '#' },
                  { id: 6, label: 'My Account', link: '#' },
                ]}
              />
              {/* footer 3rd column with links */}
              <FooterColumn
                title={'Services'}
                links={[
                  { id: 0, label: 'Pediatric Clinic', link: '#' },
                  { id: 2, label: 'Diagnosis Clinic', link: '#' },
                  { id: 3, label: 'Cardiac Clinic', link: '#' },
                  { id: 4, label: 'Laboratory Analysis', link: '#' },
                  { id: 5, label: 'Gynecological Clinic', link: '#' },
                  { id: 6, label: 'Personal Counseling', link: '#' },
                  { id: 7, label: 'Dental Clinic', link: '#' },
                ]}
              />
              {/* footer 4th column */}
              <FooterColumn
                title={'Working Hours'}
                links={[
                  { id: 0, label: 'Monday - 10 am to 7 pm', link: '#' },
                  { id: 2, label: 'Tuesday - 10 am to 7 pm', link: '#' },
                  { id: 3, label: 'Wednesday - 10 am to 7 pm', link: '#' },
                  { id: 4, label: 'Thursday - 10 am to 7 pm', link: '#' },
                  { id: 5, label: 'Friday - 10 am to 7 pm', link: '#' },
                  { id: 6, label: 'Saturday - 10 am to 7 pm', link: '#' },
                  { id: 7, label: 'Sunday - 10 am to 7 pm', link: '#' },
                ]}
              />
            </div>
            {/* footer copy right  */}
            <div className='border-t-2 py-8'>
              <p className='text-center text-lg font-normal text-gray-500'>
                Copyright © 2024 - All right reserved by Pulse Point
              </p>
            </div>
          </Container>
          <div
            onClick={() => window.scroll(0, 0)}
            className='gotopBtn invisible fixed bottom-5 right-5 opacity-0'
          >
            <PiCaretDoubleUpBold className='h-10 w-10 rounded-lg bg-deep-teal-950 p-2 text-2xl text-white' />
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
