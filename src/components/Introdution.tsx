import React, { useEffect, useState } from 'react';
import ExampleMan from '../assets/header/example_man.png';
// import ExampleMan1 from '../assets/header/example_first.png';
// import ExampleMan2 from '../assets/header/example_sec.png';
// import ExampleMan25 from '../assets/common/ssss.png';
// import ExampleMan3 from '../assets/header/example_third.png';
import github from '../assets/common/social_links/github.svg';
import inkedin from '../assets/common/social_links/inkedin.svg';
import telegram from '../assets/common/social_links/telegram.svg';
import itb from '../assets/common/ITB.svg';

type Props = {};

const Introdution = (props: Props) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const hadnleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', hadnleResize);

    return () => window.removeEventListener('resize', hadnleResize);
  }, []);

  return (
    <div className="w-full pt-14 font-raleway bg-black text-white">
      {/* <div className='max-w-screen-2xl mx-auto px-5'>

      </div> */}
      <div className="relative flex flex-row justify-between">
        <div
          className={`absolute md:static w-full ${
            isSmallScreen ? 'polygonclass_mobile' : 'polygonclass_pc'
          } opacity-90 bg-gray-600 md:bg-[#D7D7D7] md:text-black md:font-semibold bottom-0 py-28 pb-8 left-0 flex items-center justify-around md:flex-col md:items-center`}
        >
          <div className="flex flex-col w-2/3 gap-2">
            <p className="text-lg md:text-2xl">Hi, I am</p>
            <p className="text-2xl md:text-4xl md:mt-3">Adam Esmurziev</p>
            <p className="text-base md:text-xl">
              Front-end Developer / UI Designer.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:gap-7 md:flex-row md:w-2/3">
            <a href="https://github.com/Esmurzelly">
              <img src={github} className="w-8" />
            </a>
            <a href="https://ru.linkedin.com/in/adam-esmurzelly-469355280">
              <img src={inkedin} className="w-8" />
            </a>
            <a href="https://t.me/Esmurzelly">
              <img src={telegram} className="w-8" />
            </a>
          </div>
        </div>

        {/* <img className='' src={ExampleMan} alt="man" />  delete absolute and realative */}
        <div className="w-full flex justify-end">
          <img className="max-w-full" src={ExampleMan} alt="man" />
        </div>
      </div>
      

      <div className="bg-[#1D1D1D]">
        <div className="max-w-screen-2xl mx-auto px-5 flex flex-col justify-center items-center py-3">
          <div className="absolute flex flex-col gap-4 text-center max-w-screen-2xl px-4">
            <p className="text-xl font-semibold font-montserrat">IT BERRIES</p>
            <p className="font-open_sans text-sm tracking-wider">
              Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
              varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
              quis libero viverra facilisis ut ac est. Morbi commodo, eros in
              dignissim tempus, lacus odio rutrum augue, in semper sem magna
              quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit
              amet elit. Nunc egestas nisi eget enim gravida facilisis.
              Pellentesque laoreet varius turpis vel pharetra. Ut ante justo,
              consequat vitae elementum tempor, accumsan nec eros.{' '}
            </p>

            <button className='btn-primary w-[200px] after:bg-white after:left-12 before:bg-white before:right-12'>
              More
            </button>
          </div>
          <img className="" src={itb} alt="itb" />
        </div>
      </div>
    </div>
  );
};

export default Introdution;
