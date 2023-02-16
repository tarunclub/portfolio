import React from 'react';
import profilePic from '../public/profilePic.jpg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Tarun Kumar", 'Developer', 'Designer'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <img
        src={profilePic}
        height={140}
        width={140}
        className="rounded-full object-cover"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] font-semibold">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor />
        </h1>

        <div className="pt-5 font-semibold">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Project</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
