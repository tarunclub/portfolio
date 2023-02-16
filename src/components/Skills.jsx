import { motion } from 'framer-motion';
import Skill from './Skill';

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center h-screen xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl">
        Skills
      </h3>

      <div className="grid grid-cols-4 gap-5 md:pt-24">
        <Skill img="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png" />
        <Skill img="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" />
        <Skill img="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" />
        <Skill img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWh4Gq-WVRLJp1QZZ2hXUmXTAqcgif0hSCAffjJMS4W0Lud9ZrlLQeU1xBYaeMKdmHDY&usqp=CAU" />
        <Skill img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABq2tNURjtjYwVMgKcg74oNO9ngrYCdixVpVQX4orGOYmYI8UWD3umeWahGnSz8XaHq8&usqp=CAU" />
        <Skill img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png" />
        <Skill img="https://next-auth.js.org/img/logo/logo-sm.png" />
        <Skill img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png" />
        <Skill img="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
        <Skill img="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png" />
        <Skill img="https://user-images.githubusercontent.com/38039349/60953119-d3c6f300-a2fc-11e9-9596-4978e5d52180.png" />
      </div>
    </motion.div>
  );
}

export default Skills;
