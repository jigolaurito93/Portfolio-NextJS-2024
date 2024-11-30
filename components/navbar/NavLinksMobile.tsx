import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { FaHamburger } from 'react-icons/fa';

const navLinks = [
  { name: 'Home.', href: '#home' },
  { name: 'About.', href: '#about' },
  { name: 'Skills.', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact.', href: '#contact' },
];

const NavLinksMobile = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <FaHamburger className="text-4xl text-primary hover:text-primary-light active:text-primary-dark" />
        </SheetTrigger>
        <SheetContent className="lg:hidden bg-[#0A1828]">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <div className="font-poppins text-6xl font-bold gap-8 flex flex-col items-start mt-16 h-screen text-primary">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="hover:text-primary-light active:text-primary-dark"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavLinksMobile;
