import Button from "../../../components/Button";
import  Container  from "../../../components/Container"
import { easeInOut, motion } from "framer-motion";

export const Hero = ()=>{
    return <Container>
        <motion.div
          layout
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easeInOut, delay: 0.25 }}
          className="flex px-5 gap-3 py-8 md:flex-row flex-col"
        >
          <motion.div className="content-section md:w-1/2 content-center gap-4">
            <motion.h1 className="md:text-7xl text-5xl font-medium leading-[1.2] text-white/90">
              Level Up Your Learning Journey
            </motion.h1>
            <p className="text-white/70 mt-4 font-thin">
              Welcome to our learning platform, where you can discover new
              skills, connect with like-minded individuals, and grow your
              knowledge in a supportive community.
            </p>

            <div className="flex gap-6 mt-8">
            <Button size="small" variant="primary">Enroll Now</Button>
            <Button size="small" variant="secondary">View Courses</Button>
              
            </div>
          </motion.div>
          <div className="img-container md:w-1/2 relative">
            <div className="md:h-[32rem] h-[20rem] relative z-10 shadow bg-white/75 rounded-lg shadow-white">
              <motion.img initial={{scale:0.99}} animate={{scale:1}} transition={{duration:2, ease:easeInOut, repeat:Infinity, repeatType:"reverse"}}  src="/79.jpg" className="w-full h-full object-cover rounded-lg" alt="Hero Image" />
            </div>
            {/* <div className="absolute w-48 h-48 rounded-xl bg-black/35 top-0 right-0 "></div>
            <div className="absolute w-48 h-48 rounded-xl bg-black/35 bottom-0 left-0"></div> */}
          </div>
        </motion.div>
      </Container>
    
}