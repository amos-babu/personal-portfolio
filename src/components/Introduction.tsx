import { motion } from "framer-motion";

export const Introduction = () => {
  return (
    <motion.div
      className="flex md:justify-center mt-9"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      viewport={{ once: true }}
    >
      <div className="w-full lg:w-3/4 mt-6 px-3 space-y-4 sm:mt-8 md:mt-10">
        <p className="text-3xl md:text-5xl font-bold font-mono tracking-wide">
          Amos Babu
        </p>
        <p className="pt-5 font-inter text-xl font-mono">
          {" "}
          I'm an inquisitive developer who loves to create amazing things on the
          web. I'm fine for using Laravel's APIs, React's pixel-perfect user
          interfaces, or using Go wizardry. Writing code that *works*, is neat,
          and occasionally even ingenious is what I enjoy doing.
        </p>
      </div>
    </motion.div>
  );
};
