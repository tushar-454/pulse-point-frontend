import Container from '@/components/shared/Container';
import LoginwithGoogle from '@/components/shared/LoginwithGoogle';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Link from 'next/link';

const Signup = () => {
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
            <form className='space-y-5'>
              <Input
                label={'Full Name'}
                type={'text'}
                id={'name'}
                name={'name'}
                placeholder={'Dr. John Doe'}
              />
              <Input
                label={'Email'}
                type={'enail'}
                id={'email'}
                name={'email'}
                placeholder={'example@text.com'}
              />
              <Input
                label={'Password'}
                type={'password'}
                id={'password'}
                name={'password'}
                isPassword={true}
                placeholder={'H*&%FIUHsdfh'}
              />
              <Input
                label={'Confirm Password'}
                type={'password'}
                id={'confirmPassword'}
                name={'confirmPassword'}
                isPassword={true}
                placeholder={'H*&%FIUHsdfh'}
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
