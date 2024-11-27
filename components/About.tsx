import Image from 'next/image';

const About = () => {
  return (
    <div className="text-white flex flex-col gap-7 justify-center">
      <h1 className="text-4xl font-semibold">Who am I?</h1>

      <div className="">
        <Image
          src={'/images/programmer.jpg'}
          width={300}
          height={300}
          alt=""
          className="border md:hidden mx-auto mb-10"
        />
        <Image
          src={'/images/whiteboard.jpg'}
          width={600}
          height={600}
          alt=""
          className="border hidden md:flex md:mr-10 mb-8 md:float-left mx-auto md:mx-0 md:w-[400px] lg:w-[400px]"
        />

        <p>
          Hello, I’m Jose, an experienced Full-Stack Software Engineer and
          Restaurant Chef, with a passion for technology and innovation.
        </p>
        <br />
        <p>
          As a Senior Developer at The Spartan IT Group, a managed service
          provider, I specialize in delivering dynamic solutions for local
          businesses. I work in an agile environment, collaborating with
          developers and designers, conducting code reviews to maintain quality,
          and leveraging technologies like Next.js, Supabase, OAuth, and CI/CD
          pipelines. Key contributions include “The Kennel” and the Spartan IT
          Group company website.
        </p>
        <br />
        <p>
          Before this role, I earned my full-stack software engineering
          certification in 2023 while balancing my career as a chef and
          apprentice at Co.Lab, contributing to projects like “Matrimoni” and
          “Break Buddy.” My background in Hospitality - Culinary enhances my
          creativity and problem-solving skills.
        </p>
      </div>
    </div>
  );
};

export default About;
