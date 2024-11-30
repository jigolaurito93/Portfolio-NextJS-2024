import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <nav className="fixed top-0 text-white flex items-center justify-between w-full px-8 z-50 bg-[#0A1828]">
      <h1 className="text-5xl font-bold text-[#178582]">
        J<span className="text-[#BFA181]">LAU</span>
      </h1>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
