import React from 'react';

const experiences = [
  {
    company: 'The Spartan IT Group LLC',
    role: 'Senior Developer',
    date: 'April 2023 - Present',
    acc: [
      '"Project Lead for “The Kennel” – an e-commerce platform developed for Bulldog Community Gaming LLC, incorporating Next.js, Supabase, PostgreSQL, and React Hook Forms.',
      'Led end-to-end application development: architecture design, database integration, API development, and front-end optimization to deliver a seamless, responsive user experience.',
      'Created a product inventory management system and event scheduling features, supporting user engagement and business operations.',
      'Integrated OAuth for secure user authentication, ensuring data protection and user privacy across platforms.',
      'Deployed CI/CD pipelines, automating testing and deployment, which reduced release time by 30%.',
      'Utilized project management tools (Linear) to monitor project progress, ensuring timely and quality delivery of updates.',
    ],
  },
  {
    company: 'Co.Lab',
    role: 'Software Developer',
    date: 'June 2023 - November 2023',
    acc: [
      'Developed “Break Buddy” and “Matrimoni” applications with React.js, Tailwind CSS, Material-UI, and Firebase, focusing on creating scalable, accessible web solutions.',
      'Designed and deployed "Break Buddy" on Vercel with a CI/CD workflow for rapid updates and reliability.',
      'Implemented user authentication with Firebase, ensuring secure access and user data management.',
      'Engaged in Agile development cycles, contributing to sprint planning and retrospectives to drive continuous improvement.',
      'Conducted code reviews, maintaining high standards in code quality and consistency, reducing bugs by 25% through proactive improvements.',
    ],
  },
  {
    company: 'Coding Temple',
    role: 'Full-Stack Software Engineer',
    date: 'January 2022 - April 2022',
    acc: [
      'Deployed REST APIs using ReactJS and Flask in combination with PostgreSQL dbs',
      'Created apps such as Blackjack game, Shopping Cart, ROI Calculator using OOP with Python.',
      'Generated API calls and parsed resulting JSON data to be organized and displayed in Flask and React applications.',
      'Crafted databases using SQL in PostgreSQL and Entity Relationship Diagrams (ERD), as well as SQLAlchemy with Flask and proficient in DBeaver.',
      'Programmed HTML, CSS and Bootstrap to create static websites and personal portfolio.',
      'Diagnosed errors / located bugs in applications written in Python/JavaScript in Flask and React',
    ],
  },
  {
    company: 'Marriott Magnificent Mile',
    role: 'Restuarant Chef',
    date: 'August 2019 - Present',
    acc: [
      'Assisted with the development of full, tasting and special event menus to meet all establishment needs and maintain strong customer levels outlined by Marriott Brand.',
      'Plated every dish with attractive flair to meet strict restaurant standards and maintain stellar business reputation.',
      'Acted as head chef when required to maintain continuity of service and quality.',
      'Responsible for inventory and ordering ingredients.',
      'Responsible for all areas of kitchen including garde manger, pastry, saute, grill and fryer.',
      "Assisted with daily inventory, receiving and stock rotation for each station's prep work.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="px-12 lg:px-32 xl:px-56 my-32 flex flex-col gap-10">
      <h1 className="text-4xl font-semibold text-center text-primary">
        Experience
      </h1>
      {experiences.map((experience, i) => {
        return (
          <div key={i} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row justify-between">
              <h2 className="text-primary-light text-lg md:text-2xl font-semibold">
                {experience.company}
                {' - '}
                {experience.role}
              </h2>
              <h3 className="text-primary text-lg">{experience.date}</h3>
            </div>
            <ol>
              {experience.acc.map((ac, i) => {
                return (
                  <li key={i} className="list-disc text-secondary">
                    {ac}
                  </li>
                );
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
