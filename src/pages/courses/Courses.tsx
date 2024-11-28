import { Await, defer, useLoaderData } from "react-router-dom";
import { fetchCourses } from "../../data/test";
import { Suspense } from "react";
import AnimatedHeading from "../../components/AnimatedHeading";
import { Loader } from "../../components/Loader";
import Container from "../../components/Container";
import {easeInOut, motion} from "framer-motion"
import { fadeUpVariants } from "../../components/FadeUp";

interface Course {
  name: string;
  description: string;
}

interface CoursesData {
  data: Course[];
}
 const Courses = () => {
  const data = useLoaderData() as { courses: CoursesData };

  return (
    <div className="pt-10">
      <Container>
    <div className="space-y-10">
          <AnimatedHeading>Courses We Offer</AnimatedHeading>
          {/* Using Suspense and Await for creating a loading state in case the API takes a long time to give response */}
          <div className="flex gap-10 flex-wrap ">
            <Suspense fallback={<Loader />}>
              <Await
                resolve={data?.courses}
                errorElement={<p>An error occurred</p>}
              >
                {(data) => (
                  <>
                    {data.data.map((course: Course, index: number) => (
                      <motion.div variants={fadeUpVariants} initial="hidden" animate="visible" transition={{duration:0.3, ease:easeInOut, delay:0.2*index}} key={index} className="flex flex-col w-96 shrink-0">
                        <h3 className="text-2xl">{course.name}</h3>
                        <p className="text-white/70">{course.description}</p>
                      </motion.div>
                    ))}
                  </>
                )}
              </Await>
            </Suspense>
          </div>
      </div>
      </Container>

    </div>
  );
};

export default Courses

export const courseLoader = async () => {
  const response = fetchCourses();
  return defer({
    courses: response, // Deferred response
  });
};
