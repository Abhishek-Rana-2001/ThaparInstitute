import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "../../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { NavLink } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string(),
});

type FormFields = z.infer<typeof loginSchema>


export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(loginSchema),
  });
  console.log(BASE_URL);

  const handleLogin:SubmitHandler<FormFields> = async (data) => {
    if (data) {
      await axios
        .post(`${BASE_URL}/auth/login`, data)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="flex h-screen justify-center items-center p-4">
      <div className="md:w-[600px] w-full space-y-10  p-5 rounded-2xl">
        {/* Future Logo here right now a h1 to take the logos place  */}
        <h1 className="text-6xl text-center">TI</h1>
        <form
          className="space-y-6"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div>
            <input
              {...register("email", { required: true })}
              type="text"
              className="bg-inherit border border-gray-500 w-full  p-2 px-4 rounded-3xl"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-xs pl-2 text-red-400">
                {errors?.email?.message as string}
              </p>
            )}
          </div>
          <div>
            <input
              {...register("password", { required: true })}
              type="text"
              className=" border border-gray-500 bg-inherit w-full  p-2 px-4 rounded-3xl"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-xs pl-2 text-red-400">
                {errors?.password?.message as string}
              </p>
            )}
          </div>

          <div className="flex justify-end gap-2">
            <button className="select-none hover:text-blue-500 transition-colors duration-200 ease-in-out">Forgot Password?</button>
            <span className="select-none">|</span>
            <button className="select-none hover:text-blue-500 transition-colors duration-200 ease-in-out">SignUp</button>
          </div>
          <Button
            size="small"
            variant="primary"
            type="submit"
            className="block mx-auto"
          >
            Login
          </Button>
        </form>

        <div className="flex justify-center">
          <NavLink to={"/"} className={"underline text-xs hover:text-blue-500"}>Return to home</NavLink>
        </div>
      </div>
    </div>
  );
};
