import separatedLine from '../assets/about/separatorBlack.svg';
import designIcon from '../assets/about/design.png';
import developmnentIcon from '../assets/about/develoopmnent.png';
import maintenanceIcon from '../assets/about/maintenance.png';


const About = () => {
  return (
    <section id="about" className="gray_gradient block_link w-full">
      <div className="max-w-screen-2xl mx-auto px-5 flex flex-col items-center justify-center pt-16 md:pt-20 py-8 text-center">
        <div className="flex flex-col items-center gap-7">
          <h1 className="w-[200px] font-montserrat uppercase font-bold text-lg py-2 border-solid border-4 border-black">
            About me
          </h1>
          <p className="font-open_sans tracking-wider">
            My name is Adam, I've already graduated Computer Science
            faculty at the College of Information Technologies in Pyatigorsk. <br /> 
            I have been learning Front-End technologies for 3.5 years and this time
            was just enough for me to make sure that this is my place in the
            industry. I am fluent in English and Russain. 
            Apart from programming websites and apps, my passion is learning languages, hiking and 
            reading science fiction books.
          </p>
          <a target='_blank' href="https://github.com/Esmurzelly">
            <button className='btn-primary w-[270px] after:bg-black after:left-12 before:bg-black before:right-12'>
              explore
            </button>
          </a>
          <img className="my-8" src={separatedLine} alt="separatedLine" />
        </div>

        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 gap-14 text-left mt-6">
          <div className="w-4/6 mx-auto flex flex-col gap-6">
            <div className="flex flex-row items-center justify-start">
              <img
                className="absolute w-12"
                src={designIcon}
                alt="designIcon"
              />
              <h2 className="relative top-0 left-9 uppercase font-bold font-montserrat text-xl">
                desgin
              </h2>
            </div>
            <p className="font-open_sans text-sm tracking-widest">
              I can design the website based on your needs and suggestions using Figma. I
              can also create it from scratch by consulting with you during
              work.
            </p>
          </div>

          <div className="w-4/6 mx-auto flex flex-col gap-6">
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
              Based on a project created by me or another one, sent by you, I
              can program the website to be fully functional and responsive.
            </p>
          </div>

          <div className="w-4/6 md:mt-5 md:w-1/3 mx-auto md:col-start-1 md:col-end-3 flex flex-col md:items-start gap-6">
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
              In case of any problems or the need for changes, I can introduce
              new functionalities and solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
