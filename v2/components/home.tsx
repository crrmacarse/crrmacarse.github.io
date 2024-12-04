import { useState } from 'react';
import Rocket from './rocket';
import Carousel from './carousel';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const workExperienceYear = new Date().getFullYear() - 2017
  const marshallAge = new Date().getFullYear() - 2020

  // TODO: Fix this. When clicked more, it should not push back
  const renderMore = (
    <div className='max-w-3xl'>
      <blockquote className="italic font-semibold text-gray-900 dark:text-white mb-3">
        <svg className="w-4 h-4 text-gray-400 dark:text-gray-600 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <p>
          "bike stroll; chasing summits; feeding my loml; and making sure my dog is living his best life."</p>
      </blockquote>
      <p className='max-w-3xl mb-3'>
        Is a personally curated purpose of my own life. As an individual who values his mental health. I always make
        sure to have a spare time to indulge the beauties of life. Occasional biking and running had been integrated to my life.
        With fear of back pains, Iblabla and <a href="https://www.strava.com" className='font-semibold'>Strava</a>. My longest bike so far is a 700km+ ride around Panay Island.
      </p>
      <p className='max-w-3xl mb-3'>
        Hiking is probably one of my blabla. With over 32(Completed Top 5 highest mountains in PH, Mt. Guiting Guiting, Mt. Kota Kinabalu) summited mountains.
        It had been my go to hobby to chase mountains around the Philippines and abroad. Eve
      </p>
      <p className='max-w-3xl mb-3'>
        Cooking is one of my way of showing my appreciation. A self-proclaimed-chef. Talk Glamping and Bike packing
      </p>
      <p className='max-w-3xl mb-8'>
        Lastly, my {marshallAge} year old beagle, Marshall, who had been with me on my hikes. A lovely fellow that doesn't even know how to bark and
        filled with anxiety around other dogs. But humans? He loves them!
      </p>
        <Carousel />
      <button className='font-bold' onClick={() => setIsOpen(false)}>See less..</button>
    </div>
  )

  return (
    <div className='flex flex-col-reverse sm:flex-row sm:justify-around sm:items-center min-h-screen pt-24 pb-20'>
      <div>
        <h1 className='text-3xl mb-1 font-bold'>
          {/* Analytical. Accountable. A Team Person. */}
          {t('Intro')}
        </h1>
        <p className='max-w-3xl mb-3'>
          Hey there! My name is <i>Christian Ryan Refuerzo Macarse</i>. A BS Computer Science graduate from Central Philippine University
          and a proud resident of Iloilo, Philippines. With a total of <b>{workExperienceYear}</b> years work experience in the field
          of Software Engineering. I am capable of multiple things such as Full Stack Development, DevOps, Documentation, QA, and Leadership.
        </p>
        <p className='max-w-3xl mb-3'>
          My excellent interpersonal communication skills, time management, detail-oriented, and wide array of technical knowledge would be a
          great fit to your company!
        </p>
        {isOpen ? renderMore : <button className='font-bold' onClick={() => setIsOpen(true)}>Read more..</button>}
      </div>
      <div>
        <Rocket />
      </div>
    </div>
  );
};

export default HomePage;
