import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'react-image';
import ImageSrc from 'assets/images/me.jpg';
import NoImage from 'assets/images/no-image.jpg';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-section flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
        <Image className="h-128 w-max-64 p-5" src={[ImageSrc, NoImage]} alt="@crrmacarse" title="Damn, you look good bruh" />
        <div className="mx-5">
          <h1 className="text-5xl">
            {t('about.title')}
            <b>{` ${t('about.title-followup')}.`}</b>
          </h1>
          <div className="description text-lg my-5">
            <p>
              Hi guys! My name is Christian Ryan Refuerzo Macarse. My friends call me either Pablo
              or Wawi. A bit of a technical knowledgeable guy who gets confused every time if I am
              really qualified to be part of the Software Development scene or not. I really don’t
              know why I am able to make (barely) functional systems and real-world applied software
              <span role="img" aria-label="smile"> 🤷‍♂️. </span>
              I&apos;m just really that type of a person who is very eager to learn and a curious
              freak. I would just typically go on to research and start with implemenation the
              moment i would get my momentum going. I am also that office guy you see who&apos;ll
              put tremendous effort to get things done.
            </p>
            <p className="mt-5">
              A *self-acclaimed full stack developer, I worked my way to such structures like CRUD,
              OOP, MVC, MERN stack, AdonisJS/ Expo/.NET framework, REST Api, and Javascript SPAs.
              I am not really good at all, but just a purely try hard individual. A team-person who
              is willing to listen and would love to have discussions about inputs and what to
              offer to the table. Now Hire me.
            </p>
          </div>
          <div className="actions mt-12 text-lg">
            <a href="mailto:crrmacarse@gmail.com?" title="Like for real. Hire me." className="font-bold">{t('Get in touch')}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
