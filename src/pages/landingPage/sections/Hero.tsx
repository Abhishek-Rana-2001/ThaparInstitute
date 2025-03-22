import Button from "../../../components/Button";
import Container from "../../../components/Container";
import { easeIn, easeInOut, motion } from "framer-motion";
import { fadeUpVariants } from "../../../components/FadeUp";

export const Hero = () => {
  return (
    <Container>
      <div
        // layout
        // initial={{ opacity: 0, x: 20 }}
        // animate={{ opacity: 1, x: 0 }}
        // transition={{ duration: 0.8, ease: easeInOut, delay: 0.25 }}
        className="flex px-5 gap-3 md:py-28 py-6 md:flex-row flex-col"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            duration: 2,
            ease: easeIn,
            delayChildren: 0.2,
            staggerChildren: 0.4,
          }}
          className="content-section md:w-1/2 content-center gap-4"
        >
          <motion.h1
            variants={fadeUpVariants}
            className="md:text-7xl text-5xl font-medium leading-[1.2] text-white/90"
          >
            Level Up Your Learning Journey
          </motion.h1>
          <motion.p
            variants={fadeUpVariants}
            className="text-white/70 mt-4 font-thin"
          >
            Welcome to our learning platform, where you can discover new skills,
            connect with like-minded individuals, and grow your knowledge in a
            supportive community.
          </motion.p>

          <motion.div variants={fadeUpVariants} className="flex gap-6 mt-8">
            <Button size="small" variant="primary">
              Enroll Now
            </Button>
            <Button size="small" variant="secondary">
              View Courses
            </Button>
          </motion.div>
        </motion.div>
        <div className="img-container md:w-1/2 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={{duration:0.5, delay:0.2, ease:easeIn}}
            className="md:h-[32rem] h-[20rem] relative shadow bg-white/75 rounded-lg shadow-white"
          >
            <motion.img
              initial={{ scale: 0.99 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 2,
                ease: easeInOut,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              src="/79.jpg"
              className="w-full h-full object-cover rounded-lg"
              alt="Hero Image"
            />
          </motion.div>
        </div>
      </div>
    </Container>
  );
};
