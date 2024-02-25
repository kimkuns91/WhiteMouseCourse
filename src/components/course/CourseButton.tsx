import { cn } from "@/utils/style";
import { ComponentPropsWithoutRef, FC } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

const CourseButton: FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button
      className={cn(
        "rounded-full bg-[#615BFF] px-5 py-3",
        "font-medium text-white",
        "transition-all ease-in hover:opacity-70",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CourseButton;
