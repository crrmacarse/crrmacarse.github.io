import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageSrc from 'assets/images/me.jpg';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-section flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row max-w-6xl">
        <img className="h-128 p-5" src={ImageSrc} alt="ongoing" />
        <div className="mx-5">
          <h1 className="text-5xl">
            {t('about.title')}
            <b>{` ${t('about.title-followup')}.`}</b>
          </h1>
          <div className="description text-lg my-5">
            <p>
              Hi guys! My name is Christian Ryan Refuerzo Macarse also known as &quot;Pablo&quot;.
              A technical knowledgeable guy who gets confused every time if I am really qualified
              to be part in the Software Development scene or not. I really don’t know why
              I am able to make (barely) functional systems and real-world applied software.
              I&apos;m just really that type of a person who is very eager to learn and a curious
              freak. Advancing myself everytime through research and implementation, I always
              sharpen my blade in order for me to prepare with the ever fast-paced world
              of IT. I also do like to put tremendous effort to get things done.
            </p>
            <p className="mt-5">
              A *self-acclaimed full stack developer, I worked my way to such structures like CRUD,
              OOP, MVC, MERN stack, AdonisJS/ Expo/.NET framework, REST Api, and Javascript SPAs.
              I am not really good at all, but just a purely try hard individual. A team-person who
              is willing to listen and would love to have discussions about inputs and what to
              offer to the table
              <span role="img" aria-label="smile">{' 😀.'}</span>
            </p>
          </div>
          <div className="actions mt-12 text-lg">
            <a href="mailto:crrmacarse@gmail.com?" className="font-bold">{t('Get in touch')}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
