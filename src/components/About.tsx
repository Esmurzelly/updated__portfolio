import React from 'react';
import separatedLine from '../assets/about/separatorBlack.svg';
import designIcon from '../assets/about/design.png';
import developmnentIcon from '../assets/about/develoopmnent.png';
import maintenanceIcon from '../assets/about/maintenance.png';

type Props = {};

const About = (props: Props) => {
  return (
    <div id='about' className="gray_gradient w-full flex flex-col items-center justify-center py-8 px-10 text-center">
      <div className="flex flex-col items-center gap-7">
        <h1 className="w-[200px] font-montserrat uppercase font-bold text-lg py-2 px-8 border-solid border-4 border-black">
          About me
        </h1>
        <p className="font-open_sans tracking-wide">
          My name is Tomasz Gajda, I'm a third year Applied Computer Science
          student at the AGH University of Science and Technology in Krakow. I
          have been learning Front-End technologies for a year and this time was
          just enough for me to make sure that this is my place in the industry.
          Membership in the science club developed my design skills, which
          quickly turned into a new hobby. I am fluent in English (spoken and
          written) and intermediate Spanish. Apart from designing and
          programming websites, my passion is all kinds of motorsport - from
          rallies to the very king of motorsport - formula 1.
        </p>
        <button
          className='relative font-montserrat text-lg font-semibold uppercase mx-auto w-[270px]
            after:content-[""] after:absolute after:w-[2px] after:h-6 after:bg-black after:left-12 after:top-0
            before:content-[""] before:absolute before:w-[2px] before:h-6 before:bg-black before:right-12 before:top-0'
        >
          explore
        </button>
        <img className="my-8" src={separatedLine} alt="separatedLine" />
      </div>
      <div className="flex flex-col flex-wrap gap-14 text-left mt-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row items-center justify-start">
            <img className="absolute w-12" src={designIcon} alt="designIcon" />
            <h2 className="relative top-0 left-9 uppercase font-bold font-montserrat text-xl">
              desgin
            </h2>
          </div>
          <p className="font-open_sans text-sm tracking-widest">
            I can design the website based on your needs and suggestions. I can
            also create it from scratch by consulting with you during work.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-row items-center justify-start">
            <img
              className="absolute w-12"
              src={developmnentIcon}
              alt="developmnentIcon"
            />
            <h2 className="relative top-0 left-9 uppercase font-bold font-montserrat text-xl">
              development
            </h2>
          </div>
          <p className="font-open_sans text-sm tracking-widest">
            Based on a project created by me or another one, sent by you, I can
            program the website to be fully functional and responsive.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-row items-center justify-start">
            <img
              className="absolute w-12"
              src={maintenanceIcon}
              alt="maintenanceIcon"
            />
            <h2 className="relative top-2 left-9 uppercase font-bold font-montserrat text-xl">
              maintenance
            </h2>
          </div>
          <p className="font-open_sans text-sm tracking-widest">
            In case of any problems or the need for changes, I can introduce new
            functionalities and solutions.
          </p>
        </div>
      </div>
      <img className="my-14" src={separatedLine} alt="separatedLine" />
    </div>
  );
};

export default About;
