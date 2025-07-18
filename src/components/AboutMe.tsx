import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center px-4 mx-5 mt-20 mb-2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl">
        <p className="mb-5 font-mono text-lg font-light leading-tight tracking-wide md:text-xl">
          I am an ardent web developer proficient in JavaScript and Laravel. I
          enjoy solving problems and creating high-performance backends,
          scalable apps, and user-friendly interfaces.
        </p>
        <p className="mb-5 font-mono text-xl font-light leading-tight tracking-wide">
          To keep up with the rapidly changing tech scene, I'm constantly
          researching new web technologies and trends.
        </p>
        <p className="mb-5 font-mono text-xl font-light leading-tight tracking-wide">
          Beyond coding, I draw inspiration from music and art, which stimulates
          my imagination and problem-solving style.
        </p>
        <p className="mb-5 font-mono text-xl font-light leading-tight tracking-wide">
          I'm always excited to have an influence, whether it's creating
          something new, resolving challenging bugs, or exploring cutting-edge
          technology.
        </p>
      </div>
    </motion.div>
  );
};
