import { cn } from "@/utils/style";
import { Course } from "@prisma/client";
import Link from "next/link";

interface CourseIntroProps {
  course: Course;
}

const CourseIntro: React.FC<CourseIntroProps> = ({ course }) => {
  return (
    <div
      className={cn(
        "flex h-screen w-full flex-col items-center justify-center"
      )}
    >
      <p>{course.title}</p>
      <p>{course.id}</p>
      <p>{course.title}</p>
      <p>{course.difficulty}</p>
      <p>{course.category}</p>
      <p>{course.technologies}</p>
      <p>{course.videoCount}</p>
      <p>{course.duration}</p>
      <p>{course.description}</p>
      <p>{JSON.stringify(course.createdAt)}</p>
      <p>{JSON.stringify(course.publishedAt)}</p>
      <p>{JSON.stringify(course.updatedAt)}</p>
      <p>{course.isFree}</p>
      <Link className="rounded-full bg-slate-300 p-6" href={`/course/${course.id}/lecture`}>수강하러 가기</Link>
    </div>
  );
};

export default CourseIntro;
