import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type Props = {};

const Skills = (props: Props) => {
  const { skills } = useSelector((state: RootState) => state.skills);
  
  return (
    <div id='skills' className="gray_gradient w-full flex flex-col items-center justify-center py-8 px-10 text-center font-montserrat">
      <h1 className="w-[200px] font-montserrat uppercase font-bold text-lg py-2 px-8 border-solid border-4 border-black">
        skills
      </h1>

      <div>
        <h1 className="uppercase m-5">Using now:</h1>
        <ul className="w-full grid grid-cols-3 gap-10">
          {skills
            .filter(el => el.status === 'done')
            .map(el => (
              <li key={el.id} className="w-20 flex flex-col justify-between items-center">
                <img className="h-16 w-16" src={el.logo} alt={el.name} />
                <p className="mt-1 text-sm">{el.name}</p>
              </li>
            ))}
        </ul>
      </div>

      <div>
        <h1 className="uppercase m-5">Learning now:</h1>
        <ul className="w-full grid grid-cols-3 gap-10">
          {skills
            .filter(el => el.status === 'learning')
            .map(el => (
              <li key={el.id} className="w-20 flex flex-col justify-between items-center">
                <img className="h-16 w-16" src={el.logo} alt={el.name} />
                <p className="mt-1 text-sm">{el.name}</p>
              </li>
            ))}
        </ul>
      </div>

      <div>
        <h1 className="uppercase m-5">Other knowledges:</h1>
        <ul className="w-full grid grid-cols-3 gap-10">
          {skills
            .filter(el => el.status === 'other')
            .map(el => (
              <li key={el.id} className="w-20 flex flex-col justify-between items-center">
                <img className="w-16 h-16" src={el.logo} alt={el.name} />
                <p className="mt-1 text-sm">{el.name}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
