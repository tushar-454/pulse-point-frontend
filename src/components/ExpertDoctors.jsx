import ExpartDoctorCard from './ExpartDoctorCard';
import Container from './shared/Container';
import SectionTitle from './shared/SectionTitle';

const expartDoctors = [
  {
    id: 0,
    image: 'https://i.postimg.cc/ncNJsBFJ/doctor-1.png',
    name: 'Karyen Anderson',
    designation: 'BTP -  Senior Cardiologist',
    review: 4.5,
    location: 'Dhanmondi, Dhaka, Bangladesh',
    available: 'Available On Mon, 22 December',
    visitFee: 500,
  },
  {
    id: 1,
    image: 'https://i.postimg.cc/jqgKbBBC/doctor-2.png',
    name: 'Dr. Helen Keller',
    designation: 'BTP -  Senior Physiotherapist',
    review: 4.1,
    location: 'new york, USA',
    available: 'Available On Fri, 25 December',
    visitFee: 700,
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/NfKtfpwD/doctor-3.png',
    name: 'Dr. Kazi Fahim',
    designation: 'BTP -  Senior Immunologist',
    review: 4.5,
    location: 'Banani, Dhaka, Bangladesh',
    available: 'Available On Sun, 29 December',
    visitFee: 900,
  },
];

const ExpertDoctors = () => {
  return (
    <section>
      <Container>
        {/* expart doctors wrapper  */}
        <div>
          <SectionTitle
            title='Our Expert Doctors'
            subTitle={
              "Dive into a world of medical mastery with 'Our Expert Doctors' section. Here, seasoned healthcare professionals offer insights ranging from the latest research to compassionate patient care."
            }
          />
          {/* expart doctors card content and wrapper  */}
          <div className='grid grid-cols-1 justify-between gap-5 py-16 md:grid-cols-2 lg:grid-cols-3'>
            {expartDoctors?.map((doctor, index) => (
              <ExpartDoctorCard key={index} doctor={doctor} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExpertDoctors;
