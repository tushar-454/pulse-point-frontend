'use client';
import Container from '@/components/shared/Container';
import LoginwithGoogle from '@/components/shared/LoginwithGoogle';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import resolver from '@/libs/resolver';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'all', resolver: resolver });
  // handle form submit for create an account
  const createUserForm = (data) => {
    console.log(data);
  };

  return (
    <main className='bg-slate-50'>
      <Container>
        {/* signup wrapper  */}
        <div className='flex min-h-screen justify-center py-20'>
          <div className='h-fit w-full rounded-xl border bg-white p-8 sm:w-[640px]'>
            <h1 className='my-10 text-center text-3xl font-bold'>
              Signup to Pulse Point
            </h1>
            {/* form start  */}
            <form className='space-y-5' onSubmit={handleSubmit(createUserForm)}>
              <Input
                label={'Full Name'}
                type={'text'}
                id={'name'}
                name={'name'}
                placeholder={'Dr. John Doe'}
                register={{ ...register('name', { required: true }) }}
                error={errors.name && errors.name.message}
              />
              <Input
                label={'Email'}
                type={'enail'}
                id={'email'}
                name={'email'}
                placeholder={'example@text.com'}
                register={{ ...register('email', { required: true }) }}
                error={errors.email && errors.email.message}
              />
              <Input
                label={'Password'}
                type={'password'}
                id={'password'}
                name={'password'}
                isPassword={true}
                placeholder={'H*&%FIUHsdfh'}
                register={{ ...register('password', { required: true }) }}
                error={errors.password && errors.password.message}
              />
              <Input
                label={'Confirm Password'}
                type={'password'}
                id={'confirmPassword'}
                name={'confirmPassword'}
                isPassword={true}
                placeholder={'H*&%FIUHsdfh'}
                register={{
                  ...register('confirmPassword', { required: true }),
                }}
                error={errors.confirmPassword && errors.confirmPassword.message}
              />
              <Button style={{ width: '100%' }}>Create an account</Button>
            </form>
            <LoginwithGoogle />
            <p className='my-8 text-center text-lg font-bold'>
              Already have an account? Go to{' '}
              <Link
                href={'/login'}
                className='text-hit-pink-300 hover:underline'
              >
                LOG IN
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Signup;
