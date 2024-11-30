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
    <ul className="flex gap-10 items-center p-8">
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
