import contacts from "../data/contacts.json";
import { motion } from "framer-motion";

export const GetInTouch = () => {
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
    <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
      {contacts.map((contact) => (
        <motion.a
          variants={iconVariants(contact.iconVariants)}
          initial="initial"
          animate="animate"
          target="_blank"
          key={contact.id}
          href={contact.link}
          className="grid w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-700"
        >
          <img
            src={contact.path}
            alt="LinkedIn Logo"
            className="self-center w-5 h-5 justify-self-center"
          />
        </motion.a>
      ))}
    </div>
  );
};
