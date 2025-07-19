import Profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

export const Introduction = () => {
  const container = (delay: number, x: number) => ({
    hidden: { x: x, opacity: 0 },
    visible: {
      x: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  return (
    <div className="flex md:justify-center mt-9 md:px-10 lg:px-16">
      {/* <div className="self-center w-1/2 transition duration-300 ease-in-out delay-150 rounded-lg justify-self-center self sm:w-1/2 md:w-1/4 hover:-translate-y-1 hover:scale-110">
        <motion.img
          variants={container(0, -100)}
          initial="hidden"
          animate="visible"
          className="w-40 h-40 rounded-lg"
          src={Profile}
          alt="Profile picture"
        />
      </div> */}
      <div className="w-full lg:w-3/4 mt-6 px-3 space-y-4 sm:mt-8 md:mt-10">
        <motion.p
          variants={container(0, 100)}
          initial="hidden"
          animate="visible"
          className="text-gray-400 text-3xl md:text-5xl font-bold font-inter tracking-wide"
        >
          Amos Babu
        </motion.p>
        <motion.p
          variants={container(1, 100)}
          initial="hidden"
          animate="visible"
          className="pt-5 font-inter text-xl font- text-gray-400"
        >
          {" "}
           I'm a curious, code-slinging developer with a love for 
           building cool stuff on the web. Whether it's APIs in Laravel, 
           pixel-perfect UIs in React, or unleashing some Go magic, 
           I’m all in. I like writing code that *works*, is clean, and 
           sometimes even clever.
        </motion.p>
      </div>
    </div>
  );
};
