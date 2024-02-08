import img from '@/assets/images/img.png';
import Input from '@/components/ui/Input';
import SelectInput from '@/components/ui/SelectInput';
import Image from 'next/image';

const page = () => {
  return (
    <div className='w-full'>
      {/* top of the page label  */}
      <div className='flex flex-col items-center justify-between gap-1 sm:flex-row'>
        <h1 className='text-xl font-bold'>Add a Doctor</h1>
      </div>
      {/* add a doctor form */}
      <form className='mt-10 w-full rounded-lg bg-white p-5'>
        <Input
          label={'Name'}
          type={'text'}
          id={'name'}
          placeholder={'Enter doctor name'}
        />
        <Input
          label={'Email'}
          type={'email'}
          id={'email'}
          placeholder={'Enter doctor email'}
        />
        <SelectInput
          label={'Specialty'}
          id={'specialty'}
          options={['Teeth', 'Child', 'MBBS', 'FCPS']}
        />
        <div>
          <label
            htmlFor='photo'
            className='my-4 flex h-40 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-4 border-dashed border-gray-300 text-xl font-semibold text-gray-300'
          >
            Upload Photo
            <Image
              src={img}
              alt='upload img'
              className='h-10 w-10 object-contain'
            />
          </label>
          <input
            type='file'
            id='photo'
            accept='jpg, jpeg, png'
            className='hidden w-full rounded-lg border border-transparent bg-gray-100 p-3 text-lg outline-none'
          />
        </div>
        <button className='mt-4 block w-full rounded-lg bg-deep-teal-800 p-2 text-white transition-all active:bg-deep-teal-900'>
          Add
        </button>
      </form>
    </div>
  );
};

export default page;
