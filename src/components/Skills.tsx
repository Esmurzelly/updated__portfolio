import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ItemSkill from './ItemSkill';

const Skills = () => {
  const { skills } = useSelector((state: RootState) => state.skills);

  return (
    <section id='skills' className="block_link w-full gray_gradient text-center font-montserrat">
      <div className='max-w-screen-2xl mx-auto px-5 py-8 flex flex-col items-center justify-center pt-16 md:pt-20'>

        <h1 className="w-[200px] font-bold uppercase border-solid border-4 border-black font-montserrat text-lg py-2 px-8">
          skills
        </h1>

        <div>
          <h1 className="uppercase m-5">Using now:</h1>
          <ul className="w-full grid gap-10 grid-cols-3 md:grid-cols-5">
            {skills
              .filter(el => el.status === 'done')
              .map(el => (
                <ItemSkill key={el.id} id={el.id} name={el.name} logo={el.logo} />
              ))}
          </ul>
        </div>

        <div>
          <h1 className="uppercase m-5">Learning now:</h1>
          <ul className="w-full grid gap-10 grid-cols-3 md:grid-cols-5">
            {skills
              .filter(el => el.status === 'learning')
              .map(el => (
                <ItemSkill key={el.id} id={el.id} name={el.name} logo={el.logo} />
              ))}
          </ul>
        </div>

        <div>
          <h1 className="uppercase m-5">Other knowledges:</h1>
          <ul className="w-full grid gap-10 grid-cols-3 md:grid-cols-5">
            {skills
              .filter(el => el.status === 'other')
              .map(el => (
                <ItemSkill key={el.id} id={el.id} name={el.name} logo={el.logo} />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
