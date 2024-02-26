import { cn } from "@/utils/style";
import { Course } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CourseListProps {
  course: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ course }) => {
  return (
    <div className={cn("container h-screen w-full gap-4 py-20")}>
      {course.map((item, index) => (
        <Link
          className={cn(
            "flex w-full items-start gap-20",
            "border-y border-slate-300 py-8",
            "transition-all ease-in hover:opacity-70"
          )}
          href={`/course/${item.id}`}
          key={index}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={300}
            height={0}
            className="rounded-md"
          />
          <div className={cn("flex flex-col rounded-md")}>
            <h2
              className={cn(
                "mb-4 text-lg font-semibold text-[#325D9C]",
                "transition-all ease-in hover:opacity-70"
              )}
            >
              {item.title}
            </h2>
            <p>{item.description}</p>
            <p>{item.isFree ? "무료" : "유료"}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
