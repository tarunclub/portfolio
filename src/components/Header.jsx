import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header
      className="flex sticky top-0 items-center justify-between p-5 z-20 initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}"
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex items-center space-x-2"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://twitter.com/tarunkm_"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/tarunclub"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <a href="#contact" className="flex items-center">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <button className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Contact
        </button>
      </a>
    </header>
  );
}

export default Header;
