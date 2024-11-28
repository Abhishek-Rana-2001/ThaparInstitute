import type { Course } from "../data/courses";
import Button from "./Button";

export const CourseCard = ({name, description, img}:Course)=>{
    return <div className="flex flex-col justify-between h-full">
    <div className="flex flex-col gap-4 group">
      <div className="md:h-[15rem] h-[17rem] sm:h-[19rem] overflow-clip rounded-lg">
        <img
          src={img}
          alt=""
          className="object-cover rounded-lg w-full h-full scale-125 group-hover:scale-100 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl">{name}</h3>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </div>
    <div className="flex justify-start mt-3">
      <Button size="small" variant="primary">
        Get Started
      </Button>
    </div>
  </div>
}