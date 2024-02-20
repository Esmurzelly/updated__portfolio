import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ItemProject from './ItemProject';

type Props = {};

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
    <section
      id="projects"
      className="w-full block_link text-center flex flex-col items-center justify-center md:pt-20 py-8"
    >
      <h1 className="w-[200px] font-montserrat uppercase font-bold text-lg py-2 mt-3 border-solid border-4 border-black">
        portfolio
      </h1>

      <div className="w-full mt-8 bg-[#1A1A1A] py-6 px-4 text-white grid grid-cols-2 grid-rows-2 gap-y-3">
        <button
          className="sort_button col-span-1"
          onClick={() => sortByType('web_app')}
        >
          app
        </button>
        <button
          className="sort_button col-span-2"
          onClick={() => sortByType('web_site')}
        >
          sites
        </button>
        <button
          className="sort_button col-span-3"
          onClick={() => sortByType('utility')}
        >
          utils
        </button>
      </div>

      <div className="max-w-screen-2xl mx-auto px-5 flex flex-col pt-16 py-8 text-center font-montserrat">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full mt-8 mx-auto gap-6">
          {filteredProjects.map(el => (
            <ItemProject key={el.id} id={el.id} mainUrl={el.mainUrl} title={el.title} description={el.description} code={el.code} live={el.live} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
