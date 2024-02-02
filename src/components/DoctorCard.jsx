'use client';
import Image from 'next/image';
import { useState } from 'react';
import Input from './ui/Input';

const DoctorCard = ({ doctor, idx }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        data-aos={idx % 2 === 0 ? 'fade-up' : 'fade-down'}
        className='rounded-md bg-slate-50 from-deep-teal-100/50 to-hit-pink-100/50 p-4 shadow-md transition-all hover:bg-gradient-to-r'
      >
        <div className='flex items-center justify-between'>
          <div>
            <div className='flex items-center gap-2'>
              <Image
                src={
                  'https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg'
                }
                alt={'Doctor profile picture'}
                width={50}
                height={50}
                className='h-12 w-12 rounded-full object-cover'
              />
              <div>
                <h4 className='text-lg font-semibold'>Dr. John Doe</h4>
                <p className='text-sm text-gray-500'>Cardiologist</p>
              </div>
            </div>
          </div>
          <div className='text-end'>
            <p className='text-sm text-gray-500'>Rating</p>
            <p className='text-sm text-gray-500'>5.0</p>
          </div>
        </div>
        <div className='mt-4 flex items-center justify-between'>
          <div>
            <p className='text-sm text-gray-500'>USA, New York</p>
            <p className='text-sm text-gray-500'>+99044589584</p>
          </div>
          <div className='text-end'>
            <p className='text-sm text-gray-500'>Available</p>
            <p className='text-sm text-gray-500'>Sun, Mon, Fri</p>
          </div>
        </div>
        <div className='mt-4 flex items-center justify-between'>
          <div>
            <p className='text-sm text-gray-500'>Visiting Fee</p>
            <p className='text-sm text-gray-500'>100$</p>
          </div>
          <div className='text-end'>
            <p className='text-sm text-gray-500'>Visiting Hours</p>
            <p className='text-sm text-gray-500'>10:00 AM - 1:00 PM</p>
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className='mt-4 w-full rounded-full bg-white p-2 transition hover:bg-deep-teal-100 active:bg-deep-teal-200'
        >
          Book Appointment
        </button>
      </div>
      {/* modal section ui  */}
      {showModal && (
        <div className='absolute left-0 top-0 z-50 h-screen w-screen bg-[#00000050]'>
          <div className='fixed left-[50%] top-[50%] w-full translate-x-[-50%] translate-y-[-50%] space-y-4 rounded-lg bg-white p-8 sm:w-[640px]'>
            {/* close button */}
            <div>
              <button
                onClick={() => setShowModal(false)}
                className='absolute right-4 top-4 h-10 w-10 rounded-full bg-deep-teal-800 p-2 text-white transition hover:bg-deep-teal-900 active:bg-deep-teal-950'
              >
                X
              </button>
            </div>
            <div>
              <h1 className='text-xl font-bold'>Dr. Jhon Doe</h1>
              <p>Cardiologist</p>
            </div>
            <form>
              <Input
                label={'Date'}
                type={'date'}
                id={'date'}
                name={'date'}
                register={{}}
                error={''}
              />
              <Input
                label={'Time'}
                type={'time'}
                id={'time'}
                name={'time'}
                register={{}}
                error={''}
              />
              <Input
                label={'Full Name'}
                type={'text'}
                id={'name'}
                name={'name'}
                placeholder={'Jhone Dou'}
                register={{}}
                error={''}
              />
              <Input
                label={'Email'}
                type={'email'}
                id={'email'}
                name={'email'}
                placeholder={'jhone@yahoo.com'}
                register={{}}
                error={''}
              />
              <Input
                label={'Phone'}
                type={'tel'}
                id={'phone'}
                name={'phone'}
                placeholder={'+99044589584'}
                register={{}}
                error={''}
              />
              <button className='mt-4 w-full rounded-full bg-deep-teal-800 p-2 text-white transition hover:bg-deep-teal-900 active:bg-deep-teal-950'>
                Appoinment
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorCard;
