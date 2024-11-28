import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn, FaFacebook } from 'react-icons/fa6';
import { TiSocialInstagram } from 'react-icons/ti';

const links = [
  { href: 'https://github.com/jigolaurito93/', icon: <FaGithub /> },
  { href: 'https://www.linkedin.com/in/jose-laurito/', icon: <FaLinkedinIn /> },
  { href: 'https://www.facebook.com/jigolaurito', icon: <FaFacebook /> },
  {
    href: 'https://www.instagram.com/jigolaurito/',
    icon: <TiSocialInstagram />,
  },
];

const SocialLinks = () => {
  return (
    <div className="fixed hidden shadow-2xl shadow-primary lg:flex flex-col lg:right-8 xl:right-20 bg-primary rounded-full gap-7 px-3 py-5">
      {links.map((link, i) => {
        const { href, icon } = link;
        return (
          <a
            key={i}
            href={href}
            className="text-4xl text-black hover:scale-110 duration-300"
            target="_blank"
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
