import { useEffect, useState } from 'react';
import ExampleManBert from '../assets/header/example_manBert.png';
import github from '../assets/common/social_links/github.svg';
import inkedin from '../assets/common/social_links/inkedin.svg';
import telegram from '../assets/common/social_links/telegram.svg';
import backgeoundITB from '../assets/common/ITB.svg';

const Introdution = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const hadnleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', hadnleResize);

    return () => window.removeEventListener('resize', hadnleResize);
  }, []);

  return (
    <div className="w-full font-raleway bg-black text-white pt-14">
      <div className="relative flex flex-row justify-between">
        <div
          className={`absolute bottom-0 left-0 w-full opacity-90 py-28 pb-8 flex items-center justify-around bg-gray-600
          md:static md:flex-col md:items-center md:text-black md:font-semibold md:bg-gray_layout
           ${isSmallScreen ? 'polygonclass_mobile' : 'polygonclass_pc'} `}
        >
          <div className="flex flex-col w-2/3 gap-2">
            <p className="text-lg md:text-2xl">Hi, I am</p>
            <p className="text-2xl md:text-4xl md:mt-3">Adam Esmurziev</p>
            <p className="text-base md:text-xl">
              Front-end Developer / UI Designer.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:gap-7 md:flex-row md:w-2/3">
            <a target='_blank' href="https://github.com/Esmurzelly">
              <img src={github} className="w-8" />
            </a>
            <a target='_blank' href="https://ru.linkedin.com/in/adam-esmurzelly-469355280">
              <img src={inkedin} className="w-8" />
            </a>
            <a target='_blank' href="https://t.me/Esmurzelly">
              <img src={telegram} className="w-8" />
            </a>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <img className="max-w-[360px] h-auto xl:w-2/4" src={ExampleManBert} alt="man" />
        </div>
      </div>

      <div className="bg-dark_layout">
        <div className="max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
          <div className="absolute max-w-screen-2xl flex flex-col gap-4 text-center px-4 py-3">
            <p className="text-xl font-semibold font-montserrat uppercase">My IT Backgroud</p>
            <p className="font-open_sans text-sm tracking-wider">
              I began to interest in programming when I was in the 10th grade. At that time, I was deciding to try absolutely everything
              in IT from C++ applications to GameDev. <br />
              Several years have passed since I wrote my first HTML page.
              My choose made me work hard and a lot, but I never regretted it. <br />
              I'm a selflearner that's why my way biult by mistakes and lots errors, but only that made me stronger day by day.
              Nowadays, I’m developing applications, I even couldn&apos;t
              imagine 4 years ago.
            </p>

            <a target='_blank' className='mt-5  w-[170px] mx-auto' href="https://github.com/Esmurzelly">
              <button className='btn-primary w-full after:bg-white after:left-0 before:bg-white before:right-0'>
                More
              </button>
            </a>
          </div>
          <img src={backgeoundITB} alt="backgeoundITB" />
        </div>
      </div>
    </div>
  );
};

export default Introdution;
