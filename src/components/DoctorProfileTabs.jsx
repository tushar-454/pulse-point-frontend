'use client';
import { useState } from 'react';
import DoctorBusinessHours from './DoctorBusinessHours';
import DoctorLocation from './DoctorLocation';
import DoctorOverview from './DoctorOverview';
import DoctorReviews from './DoctorReviews';

const tabs = [
  {
    property: 'overview',
    label: 'Overview',
  },
  {
    property: 'location',
    label: 'Location',
  },
  {
    property: 'reviews',
    label: 'Reviews',
  },
  {
    property: 'businessHours',
    label: 'Business Hours',
  },
];

const DoctorProfileTabs = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  return (
    <div>
      <div className='flex justify-between gap-3 overflow-auto rounded-xl border'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(tab.property)}
            className={`whitespace-nowrap rounded-xl bg-hit-pink-300 px-8 py-4 text-xl font-bold text-white transition hover:bg-hit-pink-400 hover:!text-white active:bg-hit-pink-500 ${
              index !== '' ? '!text-black' : ''
            } ${index !== '' ? 'bg-white' : ''} ${
              index === ''
                ? 'bg-hit-pink-500 hover:bg-hit-pink-500 active:bg-hit-pink-500'
                : ''
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* associated tab content based on active tab */}
      <div className='space-y-5'>
        {selectedTab === 'overview' && <DoctorOverview />}
        {selectedTab === 'location' && <DoctorLocation />}
        {selectedTab === 'reviews' && <DoctorReviews />}
        {selectedTab === 'businessHours' && <DoctorBusinessHours />}
      </div>
    </div>
  );
};

export default DoctorProfileTabs;
