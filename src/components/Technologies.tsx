import languages from "../data/languages.json";
import tools from "../data/frameworks.json";
import { motion } from "framer-motion";

export const Technologies = () => {
  const iconVariants = (duration: number) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse" as "reverse",
      },
    },
  });

  return (
    <div className="flex flex-col mx-5">
      <div>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="mt-20 mb-5 font-mono text-xl text-center"
        >
          <span className="text-2xl font-bold">Languages</span>
        </motion.p>
      </div>
      <div className="flex flex-wrap justify-center gap-20">
        {languages.map((language) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: language.xLanguage }}
            transition={{ duration: 1.5 }}
            className="max-w-3xl text-center"
            key={language.id}
          >
            {" "}
            <img
              src={language.path}
              alt={language.name}
              className="w-20 h-20"
            />
          </motion.div>
        ))}
      </div>
      <div>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="mt-20 mb-5 font-mono text-xl text-center"
        >
          <span className="text-2xl font-bold">Frameworks and Tools</span>
        </motion.p>
      </div>
      <div className="flex flex-wrap justify-center gap-20">
        {tools.map((tool) => (
          <motion.div
            variants={iconVariants(tool.iconVariants)}
            initial="initial"
            animate="animate"
            className="max-w-2xl text-center"
            key={tool.id}
          >
            {" "}
            <img src={tool.path} alt={tool.name} className="h-30 w-30" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
