const InformationCard = ({ information }) => {
  const { id, icon, infoTitle, infoDesc } = information;
  return (
    <div
      className={`bg-hit-pink-300 flex gap-5 rounded-lg p-10 text-white ${
        id % 2 === 0 ? 'bg-deep-teal-800' : 'bg-hit-pink-400'
      }`}
    >
      {/* icon  */}
      <div>
        {/* <FaRegClock className='relative top-1 text-5xl' /> */}
        {icon}
      </div>
      {/* information text content  */}
      <div className='space-y-2'>
        <h1 className='text-2xl font-bold'>{infoTitle}</h1>
        <p className='text-xl font-normal'>{infoDesc}</p>
      </div>
    </div>
  );
};

export default InformationCard;
