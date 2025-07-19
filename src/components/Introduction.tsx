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
      <div className="w-full lg:w-3/4 mt-6 px-3 space-y-4 sm:mt-8 md:mt-10">
        <motion.p
          variants={container(0, 100)}
          initial="hidden"
          animate="visible"
          className="text-gray-100 text-3xl md:text-5xl font-bold font-inter tracking-wide"
        >
          Amos Babu
        </motion.p>
        <motion.p
          variants={container(1, 100)}
          initial="hidden"
          animate="visible"
          className="pt-5 font-inter text-xl font- text-gray-100"
        >
          {" "}
          I'm an inquisitive developer who loves to create amazing things on the
          web. I'm fine for using Laravel's APIs, React's pixel-perfect user
          interfaces, or using Go wizardry. Writing code that *works*, is neat,
          and occasionally even ingenious is what I enjoy doing.
        </motion.p>
      </div>
    </div>
  );
};
