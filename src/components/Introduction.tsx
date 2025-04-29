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
    <div className="flex flex-col-reverse items-center justify-center gap-10 px-4 md:flex-row mt-9 sm:px-6 md:px-10 lg:px-16">
      <div className="self-center w-1/2 transition duration-300 ease-in-out delay-150 rounded-lg justify-self-center self sm:w-1/2 md:w-1/4 hover:-translate-y-1 hover:scale-110">
        <motion.img
          variants={container(0, -100)}
          initial="hidden"
          animate="visible"
          className="w-40 h-40 rounded-lg"
          src={Profile}
          alt="Profile picture"
        />
      </div>
      <div className="w-1/2 mt-6 space-y-4 text-center sm:mt-8 md:mt-10">
        <motion.p
          variants={container(0, 100)}
          initial="hidden"
          animate="visible"
          className="text-white text-5xl font-bold font-[moonWalk] tracking-wide"
        >
          Amos Babu
        </motion.p>
        <motion.p
          variants={container(1, 100)}
          initial="hidden"
          animate="visible"
          className="pt-5 font-mono text-xl font-thin text-white"
        >
          {" "}
          <span className="font-bold tracking-wide">
            Full-stack Web Developer,{" "}
          </span>
          <span className="font-bold tracking-wide">Music </span>
          and <span className="font-bold tracking-wide">Arts</span> Enthusiast.
        </motion.p>
      </div>
    </div>
  );
};
