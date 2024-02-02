const DoctorBusinessHours = () => {
  return (
    <div className='mt-10'>
      {/* doctor profile Working Hours section */}
      <div>
        <h1 className='text-xl font-bold'>Working Hours</h1>
        <ul className='mt-2 space-y-4'>
          {[{}, {}, {}, {}, {}, {}, {}, {}].map((item, index) => (
            <li>Saturday → 03:00PM to 08:00PM</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorBusinessHours;
