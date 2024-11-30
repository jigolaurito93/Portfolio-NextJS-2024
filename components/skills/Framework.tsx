import React from 'react';
import {
  BootstrapIcon,
  ExpressIcon,
  FlaskIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactIcon,
  TailwindIcon,
} from '../Icons';

// Define the items for the frameworks/libraries
const items = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Flask', icon: <FlaskIcon /> },
  { name: 'Bootstrap', icon: <BootstrapIcon /> },
  { name: 'Tailwind', icon: <TailwindIcon /> },
  { name: 'Express', icon: <ExpressIcon /> },
  { name: 'Next.js', icon: <NextJSIcon /> },
  { name: 'Node.js', icon: <NodeJSIcon /> },
];

// Function to duplicate array for animation or repeated entries
const extendedItems = Array(20).fill(items).flat();

// Define prop types for ItemCard
interface ItemCardProps {
  name: string;
  icon: JSX.Element;
}

const ItemCard: React.FC<ItemCardProps> = ({ name, icon }) => (
  <div className="flex flex-col items-center justify-center gap-4">
    <span className="w-20">{icon}</span>
    <span className="text-primary">{name}</span>
  </div>
);

const Framework = () => {
  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      <h1 className="px-12  text-white text-2xl text-center font-semibold">
        Framework/Library
      </h1>
      <div className="flex gap-6 animate-loop-scroll-reverse">
        {extendedItems.map((item, index) => (
          <ItemCard key={`${item.name}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Framework;
