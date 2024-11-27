import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className="bg-[#0A1828] min-h-screen flex flex-col justify-center px-12 lg:px-32 xl:px-56">
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
