'use client';
import Button from './ui/Button';

const ContactForm = () => {
  return (
    <div className='w-full lg:w-1/2'>
      <form className='space-y-4' onSubmit={(e) => e.preventDefault()}>
        <div className='flex w-full gap-4'>
          <Input type='text' placeholder='Name' />
          <Input type='email' placeholder='Email' />
        </div>
        <div className='flex w-full gap-4'>
          <Input type='tel' placeholder='Mobile Number' />
          <Input type='text' placeholder='Doctor Name' />
        </div>
        <div className='flex w-full gap-4'>
          <Input type='date' placeholder='Date' />
          <Input type='time' placeholder='Time' />
        </div>
        <Button style={{ display: 'block', width: '100%' }}>Book Now</Button>
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
