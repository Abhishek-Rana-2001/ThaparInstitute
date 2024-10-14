import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type props = {
  children: React.ReactNode;
  delay?:number;
  duration?:number
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const FadeUp = ({ children, delay=0, duration=0.5 }: props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {amount : 0.5});
  const [isVisible, setIsVisible] =useState(false)

  useEffect(()=>{
    if(isInView && !isVisible){
        setIsVisible(true)
    }
  },[isInView, isVisible])

  return (
    <motion.div ref={ref} animate={isVisible ? "visible" : "hidden"} transition={{delay, duration}} variants={fadeUpVariants}>
      {children}
    </motion.div>
  );
};
