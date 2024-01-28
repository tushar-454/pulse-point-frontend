import { HiOutlineLocationMarker } from 'react-icons/hi';
import { VscCallOutgoing } from 'react-icons/vsc';
import ContactForm from './ContactForm';
import Container from './shared/Container';

const ContactUs = () => (
  <section>
    <Container>
      {/* ContactUs wrapper  */}
      <div className='mb-20 flex flex-col justify-center gap-10 rounded-lg bg-deep-teal-900 p-10 text-white sm:gap-16 lg:flex-row lg:p-20'>
        {/* contact information  */}
        <div className='w-full space-y-4 lg:w-1/2'>
          <h1 className='text-center text-4xl font-bold lg:text-left'>
            Contact With Us
          </h1>
          <p className='text-center text-base font-normal lg:text-left'>
            Welcome to our Contact Us page, where bridging the gap between us
            and our valued community is our top priority. We believe in open
            communication and are here to address any queries, concerns, or
            feedback you may have. Whether you're seeking assistance, want to
            share your thoughts, or simply connect with us
          </p>
          <p className='flex items-center gap-3'>
            <VscCallOutgoing className='text-xl' />
            +8801750141414
          </p>
          <p className='flex items-center gap-3'>
            <HiOutlineLocationMarker className='text-2xl' />
            Dhanmondi, Dhaka, Bangladesh
          </p>
        </div>
        <ContactForm />
      </div>
    </Container>
  </section>
);

export default ContactUs;
