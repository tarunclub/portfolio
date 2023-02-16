import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center max-w-6xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl">
        About
      </h3>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a little background</h4>
        <p className="md:text-xl">
          Hi, I'm Tarun Kumar, a web developer with 1 year of experience and a
          passion for the MERN stack. I specialize in building intuitive and
          user-friendly web applications using MongoDB, Express.js, React, and
          Node.js. With a strong understanding of the latest trends and
          technologies, I strive to create websites that not only look great but
          also offer exceptional user experience. I have worked on a variety of
          projects, ranging from simple websites to complex web applications,
          and I take pride in delivering high-quality results that exceed
          expectations. Take a look at my portfolio to see some of my past work,
          and don't hesitate to reach out if you're interested in working
          together on your next project.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
