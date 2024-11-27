import {
  FigmaIcon,
  GithubIcon,
  PostmanIcon,
  SlackIcon,
  TrelloIcon,
  VercelIcon,
  VSCIcon,
} from '../Icons';

const Devops = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center">DevOps & Tools</h1>
      <div className="flex">
        <GithubIcon />
        <VSCIcon />
        <SlackIcon />
        <PostmanIcon />
        <VercelIcon />
        <FigmaIcon />
        <TrelloIcon />
      </div>
    </div>
  );
};

export default Devops;
