import React from 'react';
import { GithubIcon, LinkedInIcon } from './Icons';
import Link from 'next/link';

const FooterLinks = [
  {
    name: 'GitHub',
    link: 'https://github.com/jigolaurito93/',
    icon: <GithubIcon />,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jose-laurito/',
    icon: <LinkedInIcon />,
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-16 items-center justify-center py-10 font-poppins text-lg text-primary">
      <h1>&copy; Jose Laurito</h1>
      {FooterLinks.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          target="_blank"
          className="flex items-center gap-3"
        >
          {link.name}
          <div className="w-7 bg-[#BFA181] rounded-full">{link.icon}</div>
        </Link>
      ))}
    </div>
  );
};

export default Footer;
