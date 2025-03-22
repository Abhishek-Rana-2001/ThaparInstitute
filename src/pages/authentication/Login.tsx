import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "../../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { Eye, EyeOff, Undo2 } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string(),
});

type FormFields = z.infer<typeof loginSchema>;

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(loginSchema),
  });
  const [showPassword, setShowPassword] = useState(false);

  const { setUser } = useAuth();

  const handleLogin: SubmitHandler<FormFields> = async (data) => {
    if (data) {
      await axios
        .post(`${BASE_URL}/auth/login`, data)
        .then((res) => {
          if (res.data.user) {
            setUser(res.data.user);
            sessionStorage.setItem("user", JSON.stringify(res.data.user))
            navigate("/");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="flex md:flex-row flex-col h-screen justify-center items-center p-4 md:gap-20 select-none">
      <div className="md:w-1/2 ">
        <img src="79.jpg" className="object-cover rounded-2xl" />
      </div>
      <div className="md:w-[600px] w-full space-y-10  p-5 rounded-2xl">
        {/* Future Logo here right now a h1 to take the logos place  */}
        <h1 className="md:text-6xl text-3xl font-bold text-center">LOGIN</h1>
        <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
          <div>
            <input
              {...register("email", { required: true })}
              type="text"
              className=" border border-gray-500 bg-slate-800/70 w-full  p-2 px-4 rounded-xl focus-within:outline-none focus-within:bg-slate-800/70"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-xs pl-2 text-red-400">
                {errors?.email?.message as string}
              </p>
            )}
          </div>
          <div>
            <div className="flex gap-1  border border-gray-500 bg-slate-800/70 relative  rounded-xl items-center pr-3">
              <input
                {...register("password", { required: true })}
                type={`${showPassword ? "text" : "password"}`}
                className={`bg-slate-800/70 w-full  p-2 rounded-xl  focus-within:outline-none`}
                placeholder="Password"
              />
              {!showPassword ? (
               <Eye
                  size={20}
                  onClick={() => setShowPassword(true)}
                  className="hover:cursor-pointer absolute right-3"
                />
              ) : (
                <EyeOff
                  size={20}
                  onClick={() => setShowPassword(false)}
                  className="hover:cursor-pointer absolute right-3"
                />
              )}
            </div>
            {errors.password && (
              <p className="text-xs pl-2 text-red-400">
                {errors?.password?.message as string}
              </p>
            )}
          </div>

          <div className="flex justify-end gap-2">
            <button className="select-none hover:text-blue-500 transition-colors duration-200 ease-in-out">
              Forgot Password?
            </button>
            {/* <span className="select-none">|</span>
            <button className="select-none hover:text-blue-500 transition-colors duration-200 ease-in-out">
              SignUp
            </button> */}
          </div>
          <Button
            size="small"
            variant="primary"
            type="submit"
            className="block mx-auto w-full"
          >
            Login
          </Button>
        </form>

        <div className="flex justify-center">
          <NavLink to={"/"} className={"flex gap-1 group"}>
            <span className="underline text-xs group-hover:text-blue-500">Return to home</span>
            <Undo2 className="group-hover:text-blue-500"/>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
