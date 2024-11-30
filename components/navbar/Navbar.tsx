import NavLinks from './NavLinks';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { FaHamburger } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 text-white flex items-center justify-between w-full px-8 z-50 bg-[#0A1828] p-8">
      <h1 className="text-5xl font-bold text-[#178582]">
        J<span className="text-[#BFA181]">LAU</span>
      </h1>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <FaHamburger className="text-4xl" />
          </SheetTrigger>
          <SheetContent className="lg:hidden">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription>
                <ul className="font-poppins text-6xl font-bold gap-8 flex flex-col items-start mt-16 h-screen">
                  <li>
                    <Link href="#home">Home.</Link>
                  </li>
                  <li>
                    <Link href="#about">About.</Link>
                  </li>
                  <li>
                    <Link href="#skills">Skills.</Link>
                  </li>
                  <li>
                    <Link href="#experience">Experience</Link>
                  </li>
                  <li>
                    <Link href="#contact">Contact.</Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <NavLinks />
    </nav>
  );
};

export default Navbar;
