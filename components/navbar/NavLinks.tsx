import Link from 'next/link';

const navlinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const NavLinks = () => {
  return (
    <ul className="lg:flex gap-10 items-center hidden">
      {navlinks.map((link) => (
        <li
          key={link.name}
          className="text-2xl hover:text-primary cursor-pointer font-semibold text-[#178582]"
        >
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
