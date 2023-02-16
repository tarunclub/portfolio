import { motion } from 'framer-motion';
import chatGPT from '../public/chatgpt.png';
import insta from '../public/instagram.png';

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-white/80 scrollbar-thin">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-6 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={chatGPT}
            alt="picture"
            className="rounded-full border border-gray-500 object-contain h-32 w-32"
          />

          <div className="space-y-2 px-0 md:px-10 max-w-6xl">
            <h4 className="text-2xl font-semibold text-center">ChatGPT</h4>

            <p className="text-center">
              Check out my ChatGPT clone - a sleek, modern chatbot that utilizes
              OpenAI's natural language processing to provide engaging
              conversation and answers to a variety of questions. Built with
              Nextjs and Firebase, it's fast, responsive, and easy to use. See
              it in action in my portfolio!
            </p>
          </div>
        </div>

        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-6 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={insta}
            alt="picture"
            className="rounded-full border border-gray-500 object-contain h-32 w-32"
          />

          <div className="space-y-2 px-0 md:px-10 max-w-6xl">
            <h4 className="text-2xl font-semibold text-center">
              Instagram Clone
            </h4>

            <p className="text-center">
              Check out my Instagram clone - a sleek, modern web application
              built with Next.js and Firebase that lets users upload photos,
              comment, and engage with a community of users. With a robust
              backend and intuitive frontend, this project provides a seamless
              user experience. See it in action on my portfolio and get in touch
              for any questions or feedback
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
