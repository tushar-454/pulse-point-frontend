import DoctorCard from '@/components/DoctorCard';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';
import Input from '@/components/ui/Input';

const Doctors = () => {
  return (
    <main className='py-10'>
      <Container>
        <SectionTitle
          title={'Find your doctor'}
          subTitle={
            'This is a renowned hospital. There are so many categories of doctors available here. You can find the perfect expert doctor from here.'
          }
        />
        {/* search functionality  */}
        <form className='mt-5 flex flex-col gap-2 md:flex-row'>
          <Input
            type={'text'}
            id={'doctorName'}
            name={'doctorName'}
            placeholder={'doctor name'}
          />
          <Input
            type={'text'}
            id={'category'}
            name={'category'}
            placeholder={'category'}
          />
          <Input type={'text'} id={'day'} name={'day'} placeholder={'day'} />
          <Input
            type={'number'}
            id={'rating'}
            name={'rating'}
            min={0}
            max={5}
            step={0.1}
            placeholder={'rating'}
          />
          <Input
            type={'text'}
            id={'location'}
            name={'location'}
            placeholder={'location'}
          />
        </form>
        {/* doctors list grid layout */}
        <div className='my-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]?.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default Doctors;
