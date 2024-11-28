import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { BASE_URL } from "../../utils/url";
import Button from "../Button";

const studentSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  studentID: z.string(),
  password: z.string().min(8, { message: "Password must be at least" }),
  courses: z.string().min(1, {message:"Please Select a Course"}),
});

type StudentFields = z.infer<typeof studentSchema>;

export type course = {
  _id:string,
  name:string,
  description:string,
  image?:string
}

type props = {
  courses: course[],
}

const StudentForm = ({courses }:props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentFields>({
    resolver: zodResolver(studentSchema),
  });
  

  const handleCreateStudent: SubmitHandler<StudentFields> = async (data) => {
    await axios
      .post(`${BASE_URL}/student`, data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };


  return (
    <div className=" md:w-2/3 mt-5">
      <form
        onSubmit={handleSubmit(handleCreateStudent)}
        className="flex flex-col gap-5"
      >
        <div>
          <label>
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="p-2 rounded-xl text-black w-full"
            />
          </label>
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div>
          <label>
            <input
              {...register("email")}
              type="text"
              placeholder="Email"
              className="p-2 rounded-xl text-black w-full"
            />
          </label>
        </div>

        <div>
          <label>
            <input
              {...register("studentID")}
              type="text"
              placeholder="StudentID"
              className="p-2 rounded-xl text-black w-full"
            />
          </label>
        </div>

        <div>
          <label>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="p-2 rounded-xl text-black w-full"
            />
          </label>
        </div>

        <div>
          <label>
            <select
              {...register("courses")}
              className="p-2 rounded-xl text-black w-full"
            >
              <option value={""}>
                Select Course
              </option>
              {
                courses.map((course)=>{
                  return <option key={course._id} value={course._id}>
                    {course.name}
                  </option>
                })
              }
            </select>
          </label>
        </div>

        <Button size="small" variant="primary">
          Create Student
        </Button>
      </form>
    </div>
  );
};

export default StudentForm;
