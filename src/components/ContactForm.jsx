'use client';
import Button from './ui/Button';

const ContactForm = () => {
  return (
    <div className='w-full lg:w-1/2'>
      <form className='space-y-4' onSubmit={(e) => e.preventDefault()}>
        <div className='flex w-full flex-col gap-4 sm:flex-row'>
          <Input type='text' placeholder='Name' data-aos='fade-up' />
          <Input type='email' placeholder='Email' data-aos='fade-up' />
        </div>
        <div className='flex w-full flex-col gap-4 sm:flex-row'>
          <Input type='tel' placeholder='Mobile Number' data-aos='fade-up' />
          <Input type='text' placeholder='Doctor Name' data-aos='fade-up' />
        </div>
        <div className='flex w-full flex-col gap-4 sm:flex-row'>
          <Input type='date' placeholder='Date' data-aos='fade-up' />
          <Input type='time' placeholder='Time' data-aos='fade-up' />
        </div>
        <p data-aos='fade-up'>
          <Button style={{ display: 'block', width: '100%' }}>
            Send Message
          </Button>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;

const Input = ({ ...rest }) => {
  return (
    <input
      className='w-full rounded-lg border-none bg-deep-teal-800 px-5 py-3 text-base font-normal text-white outline-none'
      {...rest}
    />
  );
};
