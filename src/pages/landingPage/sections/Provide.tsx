import Button from "../../../components/Button";
import  Container  from "../../../components/Container";
import { courses } from "../../../data/courses";
import { easeInOut, motion } from "framer-motion";

const fadeVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

export const Provide = () => {
  return (
    <Container>
      <motion.h1
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
        }}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.6, ease: easeInOut }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center md:text-5xl text-2xl z-20 font-medium mx-auto corner-border py-3"
        // className="text-center md:text-5xl relative text-2xl z-20 font-medium  mx-auto after:['']  after:w-10 after:h-6 after:bg-white after:absolute after:-left-[1px] after:-top-[1px] after:['']  before:w-10 before:h-6 before:bg-white before:absolute before:-right-[1px] before:-bottom-[1px]"
      >
        {/* Choose From The Courses We provide */}
        <span className={`relative z-10 px-4 py-4 w-full `}>
          Choose From Job Ready Courses
        </span>
      </motion.h1>
      <div
        className="grid md:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] justify-center gap-4 mt-10 p-4 gap-x-5 gap-y-10"
      >
        {courses.map((course, idx) => {
          return (
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={fadeVariants}
              key={idx}
              transition={{ duration: 0.6, ease: easeInOut, delay: 0.125 * idx }}
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col gap-3 rounded-lg justify-between"
            >
              <div className="flex flex-col gap-4 group">
                <div className="md:h-[15rem] h-[17rem] sm:h-[19rem] overflow-clip rounded-lg">
                  <img
                    src={course.img}
                    alt=""
                    className="object-cover rounded-lg w-full h-full scale-125 group-hover:scale-100 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl">{course.title}</h3>
                  <p className="text-white/70">{course.description}</p>
                </div>
              </div>
              <div>
                <Button size="small" variant="primary">
                  Get Started
                </Button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
};
