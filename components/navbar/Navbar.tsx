import NavLinks from './NavLinks';
import NavLinksMobile from './NavLinksMobile';

const Navbar = () => {
  return (
    <nav className="fixed top-0 text-white flex items-center justify-between w-full px-8 z-50 bg-[#0A1828] p-8">
      <h1 className="text-5xl font-bold text-[#178582]">
        J<span className="text-primary">LAU</span>
      </h1>
      <NavLinksMobile />
      <NavLinks />
    </nav>
  );
};

export default Navbar;
