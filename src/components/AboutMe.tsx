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
          I'm a passionate web developer with expertise in{" "}
          <span className="font-bold font-[dancingScript] tracking-wide">
            JavaScript
          </span>{" "}
          and{" "}
          <span className="font-bold font-[dancingScript] tracking-wide">
            Laravel
          </span>
          . I love problem-solving and enjoy building scalable applications,
          intuitive user interfaces, and high-performance backends.
        </p>
        <p className="mb-5 font-mono text-xl font-light leading-tight tracking-wide">
          I’m always exploring new web technologies to stay ahead in the
          fast-evolving tech landscape.
        </p>
        <p className="mb-5 font-mono text-xl font-light leading-tight tracking-wide">
          Beyond coding, I find inspiration in{" "}
          <span className="font-bold font-[dancingScript] tracking-wide">
            art
          </span>{" "}
          and{" "}
          <span className="font-bold font-[dancingScript] tracking-wide">
            music
          </span>
          , which fuel my creativity and problem-solving approach.
        </p>
        <p className="mb-5 font-mono text-xl font-light leading-tight tracking-wide">
          Whether it's building something new, fixing tricky bugs, or diving
          into emerging technologies, I'm always eager to make an impact.
        </p>
      </div>
    </motion.div>
  );
};
