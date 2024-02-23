import separatedLine from '../assets/about/separatorBlack.svg';
import designIcon from '../assets/about/design.png';
import developmnentIcon from '../assets/about/develoopmnent.png';
import maintenanceIcon from '../assets/about/maintenance.png';


const About = () => {
  return (
    <section id="about" className="block_link w-full gray_gradient">
      <div className="max-w-screen-2xl mx-auto px-5 py-8 pt-16 md:pt-20 flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center gap-7">
          <h1 className="w-[200px] py-2 font-bold uppercase border-4 border-black font-montserrat text-lg">
            About me
          </h1>
          <p className="tracking-wider font-open_sans">
            My name is Adam, I've graduated Computer Science at the IT College in Pyatigorsk. <br />
            I've been learning Front-End technologies for 3 years and this time was just enough to make sure that this is my place in the industry.
            Apart from programming websites and apps, my passion is learning languages, hiking and reading science fiction books.
          </p>
          <a target='_blank' href="https://github.com/Esmurzelly">
            <button className='btn-primary w-[170px] after:bg-black after:left-0 before:bg-black before:right-0'>
              explore
            </button>
          </a>
          <img className="my-8" src={separatedLine} alt="separatedLine" />
        </div>

        <div className="grid grid-cols-1 grid-rows-3 gap-14 md:grid-cols-2 md:grid-rows-2 text-left mt-6">
          <div className="w-4/6 mx-auto flex flex-col gap-6">
            <div className="flex flex-row items-center justify-start">
              <img className="absolute w-12" src={designIcon} alt="designIcon" />
              <h2 className="relative top-0 left-9 uppercase font-bold font-montserrat text-xl">
                desgin
              </h2>
            </div>
            <p className="tracking-widest text-sm font-open_sans">
              I can design the website based on your needs and suggestions using Figma. I can also create it from scratch by consulting with you during work.
            </p>
          </div>

          <div className="w-4/6 mx-auto flex flex-col gap-6">
            <div className="flex flex-row items-center justify-start">
              <img className="absolute w-12" src={developmnentIcon} alt="developmnentIcon" />
              <h2 className="relative top-0 left-9 uppercase font-bold font-montserrat text-xl">
                development
              </h2>
            </div>
            <p className="tracking-widest text-sm font-open_sans">
              Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive.
            </p>
          </div>

          <div className="w-4/6 mx-auto md:mt-5 md:w-1/3 md:col-start-1 md:col-end-3 flex flex-col md:items-start gap-6">
            <div className="flex flex-row items-center justify-start">
              <img className="absolute w-12" src={maintenanceIcon} alt="maintenanceIcon" />
              <h2 className="relative top-2 left-9 uppercase font-bold font-montserrat text-xl">
                maintenance
              </h2>
            </div>
            <p className="tracking-widest text-sm font-open_sans">
              In case of any problems or the need for changes, I can introduce new functionalities and solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
