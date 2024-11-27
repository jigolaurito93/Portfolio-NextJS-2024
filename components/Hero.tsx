import Image from "next/image";
import SocialLinks from "./SocialLinks";

const name = "Jose Laurito";
const title = "Chicago based Full-Stack Software Engineer";
const job = "Senior Developer at The Spartan IT Group";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-12 text-white lg:flex-row min-h-screen justify-center">
      <div className="relative">
        <Image
          src={"/images/profile-image.jpg"}
          alt="Jose Photo"
          width={1000}
          height={1000}
          className="rounded-xl w-[200px] lg:w-72 z-20 relative"
        />
        <span className="absolute z-10 border-8 border-white w-full h-full top-5 left-5 rounded-xl"></span>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h3 className="text-3xl">Hi, my name is</h3>
          <h1 className="text-6xl">{name}</h1>
          <h3 className="text-xl">{title}</h3>
          <h3 className="text-xl">and a {job}</h3>
        </div>

        <div className="flex gap-3 justify-evenly mt-10">
          <button className="border rounded-full px-4 py-2 w-40">
            Download CV
          </button>
          <button className="border rounded-full px-4 py-2 w-40">
            Contact Me
          </button>
        </div>

        <SocialLinks />
      </div>
    </div>
  );
};

export default Hero;
