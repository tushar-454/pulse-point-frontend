import { FaRegClock } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { VscCallOutgoing } from 'react-icons/vsc';
import InformationCard from './InformationCard';
import Container from './shared/Container';

const informations = [
  {
    id: 0,
    icon: <FaRegClock className='relative top-1 text-5xl' />,
    infoTitle: 'Opening Hours',
    infoDesc: 'Open 9.00 am to 5.00pm Everyday',
    animation: 'fade-up',
  },
  {
    id: 1,
    icon: <HiOutlineLocationMarker className='relative top-1 text-5xl' />,
    infoTitle: 'Our Locations',
    infoDesc: 'Dhanmondi 17, Dhaka -1200, Bangladesh',
    animation: 'fade-down',
  },
  {
    id: 2,
    icon: <VscCallOutgoing className='relative top-1 text-5xl' />,
    infoTitle: 'Contact Us',
    infoDesc: '+8801750000000 +8801750000000',
    animation: 'fade-up',
  },
];

const Information = () => {
  return (
    <section>
      <Container>
        {/* information cards wrapper  */}
        <div className='mb-20 flex flex-col justify-between gap-10 lg:flex-row'>
          {informations.map((information) => (
            <InformationCard key={information.id} information={information} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Information;
