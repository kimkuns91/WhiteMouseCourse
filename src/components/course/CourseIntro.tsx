import { cn } from "@/utils/style";
import { Course } from "@prisma/client";
import Link from "next/link";
import { AiOutlineControl } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineMovie } from "react-icons/md";
interface CourseIntroProps {
  course: Course;
}

const CourseIntro: React.FC<CourseIntroProps> = ({ course }) => {
  return (
    <div className={cn("container h-screen w-full py-20")}>
      <span className="mb-4 inline-flex items-center rounded-full bg-yellow-100 px-5 py-1 text-xs font-medium leading-5 text-yellow-700 md:text-sm">
        {course.difficulty}
      </span>
      <h2
        className={cn(
          "mb-4 text-center text-3xl font-medium text-[#39211E]",
          "md:text-left md:text-4xl",
          "lg:text-5xl"
        )}
      >
        {course.title}
      </h2>
      <p className="break-words text-base text-[#39211E] md:text-lg lg:text-xl">
        {course.technologies.join(", ")}
      </p>
      <div className="my-8 grid grid-cols-3 gap-28">
        <div className="flex max-w-[250px] items-center justify-center gap-8 rounded-md bg-slate-400 px-8 py-4">
          <div className="flex items-center justify-center rounded-md bg-slate-200 p-4">
            <MdOutlineMovie className="text-3xl text-black" />
          </div>
          <div>
            <p className="truncate text-sm font-medium leading-5">동영상</p>
            <p className="text-xl font-medium leading-8 text-gray-900">
              {course.videoCount} 개
            </p>
          </div>
        </div>
        <div className="flex max-w-[250px] items-center justify-center gap-8 rounded-md bg-slate-400 px-8 py-4">
          <div className="flex items-center justify-center rounded-md bg-slate-200 p-4">
            <CiClock2 className="text-3xl text-black" />
          </div>
          <div>
            <p className="truncate text-sm font-medium leading-5">강의 분량</p>
            <p className="text-xl font-medium leading-8 text-gray-900">
              {course.duration}
            </p>
          </div>
        </div>
        <div className="flex max-w-[250px] items-center justify-center gap-8 rounded-md bg-slate-400 px-8 py-4">
          <div className="flex items-center justify-center rounded-md bg-slate-200 p-4">
            <AiOutlineControl className="text-3xl text-black" />
          </div>
          <div>
            <p className="truncate text-sm font-medium leading-5">레벨</p>
            <p className="text-xl font-medium leading-8 text-gray-900">
              {course.difficulty}
            </p>
          </div>
        </div>
      </div>
      <Link
        className="mt-4 rounded-md bg-slate-300 px-8 py-4"
        href={`/course/${course.id}/lecture`}
      >
        수강하러 가기
      </Link>
    </div>
  );
};

export default CourseIntro;
