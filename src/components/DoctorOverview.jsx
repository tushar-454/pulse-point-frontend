const DoctorOverview = () => {
  return (
    <div className='my-10'>
      {/* doctor profile about section */}
      <div data-aos='fade-down'>
        <h1 className='text-xl font-bold'>About Me</h1>
        <p className='text-justify'>
          A doctor is a medical professional who diagnoses, treats, and prevents
          illnesses and injuries in patients. They have extensive knowledge of
          the human body and medical conditions, and they use this expertise to
          provide medical care and advice. Doctors work in various specialties,
          such as general medicine, surgery, pediatrics, or psychiatry, and they
          often collaborate with other healthcare professionals to ensure the
          well-being of their patients. They play a crucial role in promoting
          and maintaining the health of individuals and communities.
        </p>
      </div>
      {/* doctor overview all section wrapper  */}
      <div className='flex flex-col justify-between gap-5 lg:flex-row'>
        {/* education - services - work&experience section  */}
        <div className='w-full lg:w-1/2'>
          {/* education information wrapper  */}
          <div data-aos='fade-down'>
            <h1 className='my-5 text-xl font-bold'>Education</h1>
            <div className='space-y-4'>
              <ui className='list-disc'>
                {[{}, {}, {}].map((item, index) => (
                  <li key={index} className='text-lg font-bold'>
                    American Dental Madical University.
                    <p className='text-base font-normal'> → MBBS</p>
                    <p className='text-base font-normal'> → 2015 - 2020</p>
                  </li>
                ))}
              </ui>
            </div>
          </div>
          {/* work experience wrapper  */}
          <div data-aos='fade-down'>
            <h1 className='my-5 text-xl font-bold'>Work & Experience</h1>
            <div className='space-y-4'>
              <ui className='list-disc'>
                {[{}, {}, {}].map((item, index) => (
                  <li key={index} className='text-lg font-bold'>
                    Comfort Dental Clinic, New York
                    <p className='text-base font-normal'> → 2010 - 2020</p>
                    <p className='text-base font-normal'> → 10 Years</p>
                  </li>
                ))}
              </ui>
            </div>
          </div>
          {/* services list wrapper  */}
          <div data-aos='fade-down'>
            <h1 className='my-5 text-xl font-bold'>Services</h1>
            <div className='space-y-4'>
              <ui className='list-disc'>
                {[{}, {}, {}].map((item, index) => (
                  <li key={index}>Teeth bending</li>
                ))}
              </ui>
            </div>
          </div>
        </div>
        {/* award and specialties section  */}
        <div className='w-full lg:w-1/2'>
          {/* award information wrapper  */}
          <div data-aos='fade-down'>
            <h1 className='my-5 text-xl font-bold'>Award</h1>
            <div className='space-y-4'>
              <ui className='list-disc'>
                {[{}, {}, {}].map((item, index) => (
                  <li key={index} className='text-lg font-bold'>
                    Humanitarian Award
                    <p className='text-base font-medium'> → July - 2019</p>
                    <p className='text-justify text-base font-normal'>
                      → The Humanitarian Award is given to individuals who have
                      made significant contributions to improving the well-being
                      and quality of life for others. It recognizes doctors who
                      have demonstrated exceptional compassion, selflessness,
                      and dedication to serving their patients and communities.
                    </p>
                  </li>
                ))}
              </ui>
            </div>
          </div>
          {/* doctor specialties list wrapper  */}
          <div data-aos='fade-down'>
            <h1 className='my-5 text-xl font-bold'>Specialties</h1>
            <div className='space-y-4'>
              <ui className='list-disc'>
                {[{}, {}, {}, {}, {}].map((item, index) => (
                  <li key={index}>Dental Care</li>
                ))}
              </ui>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorOverview;
