import Experience from '../Experience';
import Devops from './Devops';
import Framework from './Framework';
import Languages from './Languages';

const Skills = () => {
  return (
    <div className="">
      <h1 className="w-full text-center text-4xl font-semibold text-primary">
        Skills
      </h1>
      <Languages />
      <Framework />
      <Devops />
      <Experience />
    </div>
  );
};

export default Skills;
