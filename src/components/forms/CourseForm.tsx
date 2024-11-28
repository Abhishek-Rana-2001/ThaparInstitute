import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { BASE_URL } from "../../utils/url";
import Button from "../Button";

const courseSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string(),
  courseId: z.string(),
  image: z.string().optional(),
});

type CourseFields = z.infer<typeof courseSchema>;

const CourseForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CourseFields>({
    resolver: zodResolver(courseSchema),
  });


  const handleFileUpload = async(e:React.ChangeEvent<HTMLInputElement> , onChange: (value: string) => void)=>{
    if(!e.target.files || !e.target.files[0]){
         return;
    }
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    try {
        const response = await axios.post(`${BASE_URL}/upload`, formData);
        onChange(response.data.downloadUrl); // Example to pass the URL to the form state
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error("Axios error:", error.response?.data || error.message);
        } else {
          console.error("Unexpected error:", error);
        }
      }
  }

  const handleCreateCourse: SubmitHandler<CourseFields> = async (data) => {
    await axios
      .post(`${BASE_URL}/course`, data)
      .then((response) => {
       if(response.status === 201){
         alert("Course created successfully");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleCreateCourse)}
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
              {...register("description")}
              type="text"
              placeholder="Description"
              className="p-2 rounded-xl text-black w-full"
            />
          </label>
        </div>

        <div>
          <label>
            <input
              {...register("courseId")}
              type="text"
              placeholder="Course ID"
              className="p-2 rounded-xl text-black w-full"
            />
          </label>
        </div>

        <div>
          <label>
            <Controller
              name="image"
              rules={{ required: true }}
              control={control}
              render={({ field }) => (
                <div>
                  <input type="file" onChange={(e)=>handleFileUpload(e,field.onChange)} />
                </div>
              )}
            />
          </label>
        </div>

        <Button size="small" variant="primary">
          Create Student
        </Button>
      </form>
    </div>
  );
};

export default CourseForm;
