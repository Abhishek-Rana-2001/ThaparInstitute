import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "../../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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

  const { user, setUser } = useAuth();

  const handleLogin: SubmitHandler<FormFields> = async (data) => {
    if (data) {
      await axios
        .post(`${BASE_URL}/auth/login`, data)
        .then((res) => {
          if (res.data.user) {
            setUser(res.data.user);
            navigate("/");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="flex h-screen justify-center items-center p-4">
      <div className="md:w-[600px] w-full space-y-10  p-5 rounded-2xl">
        {/* Future Logo here right now a h1 to take the logos place  */}
        <h1 className="text-6xl text-center">TI</h1>
        <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
          <div>
            <input
              {...register("email", { required: true })}
              type="text"
              className="bg-inherit border border-gray-500 w-full  p-2 px-4 rounded-3xl focus-within:outline-none"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-xs pl-2 text-red-400">
                {errors?.email?.message as string}
              </p>
            )}
          </div>
          <div>
            <div className="flex gap-1  border border-gray-500 rounded-3xl items-center pr-3">
              <input
                {...register("password", { required: true })}
                type={`${showPassword ? "text": "password"}`}
                className={`bg-inherit w-full  p-2 px-4 focus-within:outline-none`}
                placeholder="Password"
              />
              {!showPassword ? <FaEye size={20} onClick={()=>setShowPassword(true)} className="hover:cursor-pointer" /> : <FaEyeSlash size={20} onClick={()=>setShowPassword(false)} className="hover:cursor-pointer"/>}
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
            <span className="select-none">|</span>
            <button className="select-none hover:text-blue-500 transition-colors duration-200 ease-in-out">
              SignUp
            </button>
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
          <NavLink to={"/"} className={"underline text-xs hover:text-blue-500"}>
            Return to home
          </NavLink>
        </div>
      </div>
    </div>
  );
};
