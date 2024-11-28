import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Skills from '@/components/skills/Skills';

export default function Home() {
  return (
    <div className="bg-[#0A1828] min-h-screen flex flex-col justify-center">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
