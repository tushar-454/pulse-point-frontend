import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';
import { FaAmbulance, FaUserNurse } from 'react-icons/fa';
import {
  GiArchiveResearch,
  GiMedicinePills,
  GiTestTubes,
} from 'react-icons/gi';
import { MdLocalPharmacy } from 'react-icons/md';

const services = [
  {
    icon: <GiMedicinePills className='text-5xl text-black' />,
    title: 'Telemedicine',
    details:
      'Connect with healthcare professionals remotely for consultations, prescriptions, and follow-ups through secure video calls and messaging.',
  },
  {
    icon: <FaUserNurse className='text-5xl text-black' />,
    title: 'Nursing Services',
    details:
      'Experienced and qualified nurses available for in-home care, medication administration, and health monitoring to provide comprehensive patient support.',
  },
  {
    icon: <GiArchiveResearch className='text-5xl text-black' />,
    title: 'Laboratory Services',
    details:
      'State-of-the-art laboratory facilities for accurate diagnostic testing, including blood tests, imaging studies, and other essential medical investigations.',
  },
  {
    icon: <MdLocalPharmacy className='text-5xl text-black' />,
    title: 'Pharmacy Services',
    details:
      'Efficient and reliable pharmacy services, offering a wide range of medications, prescription fulfillment, and doorstep delivery for patient convenience.',
  },
  {
    icon: <GiTestTubes className='text-5xl text-black' />,
    title: 'Medical Testing Services',
    details:
      'Comprehensive medical testing services, covering a variety of tests and screenings to aid in the diagnosis, monitoring, and prevention of various health conditions.',
  },
  {
    icon: <FaAmbulance className='text-5xl text-black' />,
    title: 'Ambulance Services',
    details:
      'Emergency ambulance services for swift and safe transportation of patients to medical facilities, ensuring timely access to critical care in urgent situations.',
  },
];

const Services = () => {
  return (
    <main className='min-h-screen'>
      <Container>
        <div className='py-10'>
          <SectionTitle
            subTitle={
              'Ensure convenience with our cross-platform accessibility, allowing doctors and patients to connect and access services seamlessly from various devices.'
            }
            title={'Our All Services'}
          />
          {/* all services wrapper  */}
          <div className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {services.map((service, index) => (
              <div
                key={index}
                data-aos='fade-up'
                className='rounded-lg border bg-white p-6 shadow-lg transition-all hover:bg-deep-teal-50'
              >
                <div className='bg-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full'>
                  {service.icon}
                </div>
                <h4 className='mb-2 text-center text-xl font-semibold'>
                  {service.title}
                </h4>
                <p className='text-center text-gray-500'>{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Services;
