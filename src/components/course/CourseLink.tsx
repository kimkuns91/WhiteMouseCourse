import { cn } from "@/utils/style";
import Link from "next/link";
import { ComponentPropsWithoutRef, FC } from "react";

type ButtonProps = ComponentPropsWithoutRef<"a">;

const CourseLink: FC<ButtonProps> = ({
  className,
  children,
  href,
  ...rest
}) => {
  return (
    <Link
      className={cn(
        "rounded-full bg-[#615BFF] px-5 py-3",
        "font-medium text-white",
        "transition-all ease-in hover:opacity-70",
        className
      )}
      href={href!}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default CourseLink;
