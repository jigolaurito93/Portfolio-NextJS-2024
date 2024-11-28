import Image from 'next/image';

const About = () => {
  return (
    <div className="text-white flex flex-col gap-7 justify-center mb-36 px-12 lg:px-32 xl:px-56">
      <h1 className="text-4xl font-semibold text-primary">Who am I?</h1>

      <div className="">
        <div className="relative w-64 mx-auto md:mx-0 md:w-[400px] md:mr-28">
          <Image
            src={'/images/programmer.jpg'}
            width={300}
            height={300}
            alt=""
            className="md:hidden z-20 rounded-sm mb-10 relative w-64"
          />
          <Image
            src={'/images/whiteboard.jpg'}
            width={600}
            height={600}
            alt=""
            className="relative hidden z-20 rounded-sm md:flex md:mr-10 mb-8 md:float-left md:mx-0 md:w-[400px]"
          />
          <span className="absolute z-10 border-8 border-primary w-full h-full md:h-[270px] top-6 left-7 md:top-4 md:left-5 rounded-sm"></span>
        </div>

        <p>
          Hello, I&apos;m Jose, an experienced{' '}
          <span className="text-primary font-semibold text-lg">
            Full-Stack Software Engineer{' '}
          </span>
          and Restaurant Chef, with a passion for technology and innovation.
        </p>
        <br />
        <p>
          As a{' '}
          <span className="text-primary font-semibold text-lg">
            Senior Developer
          </span>{' '}
          at{' '}
          <span className="text-primary font-semibold text-lg">
            The Spartan IT Group
          </span>
          , a managed service provider, I specialize in delivering dynamic
          solutions for local businesses. I work in an agile environment,
          collaborating with developers and designers, conducting code reviews
          to maintain quality, and leveraging technologies like Next.js,
          Supabase, OAuth, and CI/CD pipelines. Key contributions include “The
          Kennel” and the Spartan IT Group company website.
        </p>
        <br />
        <p>
          Before this role, I earned my full-stack software engineering
          certification in 2023 while balancing my career as a chef and
          apprentice at{' '}
          <span className="text-primary font-semibold text-lg">Co.Lab</span>,
          contributing to projects like “Matrimoni” and “Break Buddy.” My
          background in Hospitality - Culinary enhances my creativity and
          problem-solving skills.
        </p>
      </div>
    </div>
  );
};

export default About;
