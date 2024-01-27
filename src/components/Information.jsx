import InformationCard from './InformationCard';
import Container from './shared/Container';

const Information = () => {
  return (
    <section>
      <Container>
        {/* information cards wrapper  */}
        <div className='mb-20 flex flex-col justify-between gap-10 lg:flex-row'>
          <InformationCard />
          <InformationCard />
          <InformationCard />
        </div>
      </Container>
    </section>
  );
};

export default Information;
