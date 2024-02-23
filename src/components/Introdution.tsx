import { useEffect, useState } from 'react';
import ExampleMan from '../assets/header/example_man.png';
// import ExampleMan1 from '../assets/header/example_first.png';
// import ExampleMan2 from '../assets/header/example_sec.png';
// import ExampleMan25 from '../assets/common/ssss.png';
// import ExampleMan3 from '../assets/header/example_third.png';
import github from '../assets/common/social_links/github.svg';
import inkedin from '../assets/common/social_links/inkedin.svg';
import telegram from '../assets/common/social_links/telegram.svg';
import itb from '../assets/common/ITB.svg';

const Introdution = () => {
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

        {/* <img className='' src={ExampleMan} alt="man" />  delete absolute and realative */}
        <div className="w-full flex justify-end">
          <img className="max-w-full" src={ExampleMan} alt="man" />
        </div>
      </div>
      

      <div className="bg-[#1D1D1D]">
        <div className="max-w-screen-2xl mx-auto px-5 flex flex-col justify-center items-center py-3">
          <div className="absolute flex flex-col gap-4 text-center max-w-screen-2xl px-4">
            <p className="text-xl font-semibold font-montserrat uppercase">My IT Backgroud</p>
            <p className="font-open_sans text-sm tracking-wider">
              I began to interest in programming when I was in the 10th grade. At that time, I was deciding to try absolutely everything 
              in IT from C++ applications to GameDev. After all, I choosed Frontend development. The main reason was visualization of
              what you write in real time. Several years have passed since I wrote my first HTML page.
              My choose made me work hard and a lot, but I never regretted it. <br />
              I'm a selflearner that's why my way biult by mistakes and lots errors, but only that made me stronger day by day.
              It helped me to have an internship and get a job in IT company.
              Nowadays, I’m developing applications, I even couldn&apos;t 
              imagine 4 years ago. 
            </p>

            <a target='_blank' className='mt-5' href="https://github.com/Esmurzelly">
              <button className='btn-primary w-[270px] after:bg-white after:left-12 before:bg-white before:right-12'>
                More
              </button>
            </a>
          </div>
          <img src={itb} alt="itb" />
        </div>
      </div>
    </div>
  );
};

export default Introdution;
