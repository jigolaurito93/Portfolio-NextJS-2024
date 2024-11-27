import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="fixed top-0 text-white flex items-center justify-between w-full px-8 border">
      <h1>JLAU</h1>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
