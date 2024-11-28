import Devops from './Devops';
import Framework from './Framework';
import Languages from './Languages';

const Skills = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="w-full text-center text-4xl font-semibold text-primary">
        Skills
      </h1>
      <Languages />
      <Framework />
      <Devops />
    </div>
  );
};

export default Skills;
