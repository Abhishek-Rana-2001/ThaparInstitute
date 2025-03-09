import { easeInOut, motion } from "framer-motion";
import { cn } from "../utils/utils";

type Props = {
    children: React.ReactNode;
    className?:string,
    spanClass?:string
}

const AnimatedHeading = ({children,className,spanClass} : Props) => {
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
      className={cn("text-center md:text-5xl text-2xl  font-medium mx-auto  px-5 corner-border",className)}
    >
      <span className={cn("px-4 py-4 w-full",spanClass)}>
        {children}
      </span>
    </motion.h1>
  );
};

export default AnimatedHeading
