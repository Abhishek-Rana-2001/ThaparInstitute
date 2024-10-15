import Container from "../../../components/Container";
import { CourseCard } from "../../../components/CourseCard";
import { FadeUp } from "../../../components/FadeUp";
import { courses } from "../../../data/courses";

export const Provide = () => {
  return (
    <Container>
      <FadeUp delay={0.5}>
        <h1
          className="text-center md:text-5xl text-2xl font-medium mx-auto corner-border py-3"
          // className="text-center md:text-5xl relative text-2xl z-20 font-medium  mx-auto after:['']  after:w-10 after:h-6 after:bg-white after:absolute after:-left-[1px] after:-top-[1px] after:['']  before:w-10 before:h-6 before:bg-white before:absolute before:-right-[1px] before:-bottom-[1px]"
        >
          <span className={`relative px-4 py-4 w-full `}>
            Choose From Job Ready Courses
          </span>
        </h1>
      </FadeUp>
      <div className="grid md:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] justify-center gap-4 mt-10 p-4 gap-x-5 gap-y-10">
        {courses.map((course, idx) => {
          return (
            <FadeUp key={idx} delay={idx * 0.2}>
              <CourseCard title={course.title}  img={course.img} description={course.description} />
            </FadeUp>
          );
        })}
      </div>
    </Container>
  );
};
