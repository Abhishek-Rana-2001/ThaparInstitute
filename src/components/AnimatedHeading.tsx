import { easeInOut, motion } from "framer-motion";

type Props = {
    children: React.ReactNode;
}

const AnimatedHeading = ({children} : Props) => {
  return (
    <motion.h1
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.6, ease: easeInOut }}
      viewport={{ once: true, amount: 0.5 }}
      className="text-center md:text-5xl text-2xl z-20 font-medium mx-auto  px-5 corner-border"
    >
      <span className="relative z-10 px-4 py-4 w-full">
        {children}
      </span>
    </motion.h1>
  );
};

export default AnimatedHeading
