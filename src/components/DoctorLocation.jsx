const DoctorLocation = () => {
  return (
    <div className='my-10'>
      {/* doctor profile location section */}
      <div data-aos='fade-down'>
        <h1 className='text-xl font-bold'>Location</h1>
        <p className='text-justify'>
          <p className='font-medium'>
            Floor Number: <span className='font-normal'>IPD-4th</span>
          </p>
          <p className='font-medium'>
            Floor Room Number: <span className='font-normal'>508</span>
          </p>
          <p className='font-medium'>
            Branch Name & Address:{' '}
            <span className='font-normal'>
              Ibn Sina Diagnostic & Imaging Center, Dhanmondi House 48, Road
              9/A, Dhanmondi, Dhaka-1209
            </span>
          </p>
        </p>
      </div>
      {/* doctor direct map location  */}
      <div className='my-5' data-aos='zoom-in'>
        <iframe
          title='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9563.841853817767!2d90.37118787867581!3d23.746079079539733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4c7c2d90a9%3A0x26436b1b9dcd741e!2sIbn%20Sina%20Diagnostic%20and%20Imaging%20Center%20(Dhanmondi%209A)!5e0!3m2!1sen!2sbd!4v1706850660639!5m2!1sen!2sbd'
          width='100%'
          height='450'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
        ></iframe>
      </div>
    </div>
  );
};

export default DoctorLocation;
