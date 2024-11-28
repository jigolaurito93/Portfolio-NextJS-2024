import React from 'react';
import {
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  PostgreSQLIcon,
  PythonIcon,
  SupabaseIcon,
  TypescriptIcon,
} from '../Icons';

const items = [
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'HTML', icon: <HTMLIcon /> },
  { name: 'CSS', icon: <CSSIcon /> },
  { name: 'JavaScript', icon: <JavaScriptIcon /> },
  { name: 'Typescript', icon: <TypescriptIcon /> },
  { name: 'Supabase', icon: <SupabaseIcon /> },
  { name: 'PostgreSQL', icon: <PostgreSQLIcon /> },
];

// Function to duplicate array for animation or repeated entries
const extendedItems = Array(3).fill(items).flat();

// Define prop types for ItemCard
interface ItemCardProps {
  name: string;
  icon: JSX.Element;
}

const ItemCard: React.FC<ItemCardProps> = ({ name, icon }) => (
  <div className="flex flex-col items-center justify-center gap-4">
    <span className="w-20 md:w-36">{icon}</span>
    <span className="text-primary">{name}</span>
  </div>
);

const Languages = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="px-12 text-primary text-xl font-semibold">
        Languages/Database
      </h1>
      <div className="flex gap-6 animate-loop-scroll">
        {extendedItems.map((item, index) => (
          <ItemCard key={`${item.name}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Languages;
