import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type Props = {
};

type FilterTypes = 'web_app' | 'web_site' | 'utility';

const Projects = (props: Props) => {
  const { projects } = useSelector((state: RootState) => state.portfolio);
  const [filterType, setFilterType] = useState<FilterTypes>();

  const sortByType = (type: FilterTypes) => {
    setFilterType(type);
  };

  const filteredProjects = filterType
    ? projects.filter(el => el.type === filterType)
    : projects;

  return (
    <section id='projects' className="w-full block_link flex flex-col items-center justify-center py-8 text-center font-montserrat">
      <h1 className="w-[200px] font-montserrat uppercase font-bold text-lg py-2 mt-3 border-solid border-4 border-black">
        portfolio
      </h1>

      <div className="w-full mt-8 bg-[#1A1A1A] py-6 px-4 text-white grid grid-cols-2 grid-rows-2 gap-y-3">
        <button // after line add
          className="relative row-span-1 col-span-1 uppercase text-[#7C7C7C] focus:text-[#FFFBFB]
          before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-[#AAAAAA] before:focus:bg-white before:right-0 before:bottom-0"
          onClick={() => sortByType('web_app')}
        >
          app
        </button>
        <button
          className="relative row-span-1 col-span-2 uppercase text-[#7C7C7C] focus:text-[#FFFBFB]
          before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-[#AAAAAA] before:focus:bg-white before:right-0 before:bottom-0"
          onClick={() => sortByType('web_site')}
        >
          sites
        </button>
        <button
          className="relative row-span-1 col-span-3 uppercase text-[#7C7C7C] focus:text-[#FFFBFB]
          before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-[#AAAAAA] before:focus:bg-white before:right-0 before:bottom-0"
          onClick={() => sortByType('utility')}
        >
          utils
        </button>
      </div>

      <div className="grid grid-cols-1 w-full mt-8 mx-auto gap-3 px-10">
        {' '}
        {/* change grid cols in big screens */}
        {filteredProjects.map(el => (
          <div
            key={el.id}
            className="card group cursor-pointer rounded-xl overflow-hidden relative w-full grow flex items-center justify-center bg-cover bg-center
            before:content-[''] before:absolute before:top-0 before:left-0 before:h-0 before:w-full before:hover:bg-gradient-to-r from-gray-800 to-indigo-800 before:hover:h-full before:opacity-85 
            before:transition-all before:duration-500
            "
          >
            <img
              className="object-cover object-top w-full h-[334px]"
              src={el.mainUrl}
              alt="mainUrl"
            />
            <div
              className="w-full h-full hidden absolute text-white top-0 left-0 gap-3 p-2
              group-hover:flex group-hover:flex-col group-hover:items-center group-hover:justify-center"
            >
              <h2 className="font-semibold text-lg">{el.title}</h2>
              <p className="text-sm">{el.description}</p>

              <div className="flex flex-row items-center justify-center gap-2 mt-6">
                <a
                  href={el.live}
                  className='relative animate-bounce text-base uppercase mx-auto w-[100px] 
                  after:content-[""] after:absolute after:w-[2px] after:h-6 after:bg-white after:left-3 after:top-0
                  before:content-[""] before:absolute before:w-[2px] before:h-6 before:bg-white before:right-3 before:top-0'
                >
                  demo
                </a>
                <a
                  href={el.code}
                  className='relative animate-bounce text-base uppercase mx-auto w-[100px] 
                  after:content-[""] after:absolute after:w-[2px] after:h-6 after:bg-white after:left-3 after:top-0
                  before:content-[""] before:absolute before:w-[2px] before:h-6 before:bg-white before:right-3 before:top-0'
                >
                  code
                </a>
              </div>
            </div>
            {/* <p className='text-lg'>{el.title}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
