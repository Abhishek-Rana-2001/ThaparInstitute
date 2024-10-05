import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
  variant : "primary" | "secondary"
}

export const Button = ({ children, size ,variant , ...props }: ButtonProps) => {
  const sizeClasses = {
    small: "text-base px-4 py-2",
    medium: "text-xl px-5 py-2",
    large: "text-3xl px-6 py-3",
  };

  const ColorVariants = {
    primary:
      "rounded-xl bg-white hover:bg-inherit border shadow shadow-white border-white transition-colors duration-[250ms] ease-out",
    secondary:
      " rounded-xl bg-transparent hover:bg-white border shadow shadow-white border-white transition-colors duration-[250ms] ease-out",
  };

  return (
    <button {...props} className={twMerge("", sizeClasses[size], ColorVariants[variant])}>
      <span className="mix-blend-difference">{children}</span>
    </button>
  );
};
