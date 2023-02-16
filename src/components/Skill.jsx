import { motion } from 'framer-motion';

function Skill({ img }) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={img}
        className="rounded-full border border-gray-500 object-contain bg-white h-20 w-20"
      />
    </div>
  );
}

export default Skill;
