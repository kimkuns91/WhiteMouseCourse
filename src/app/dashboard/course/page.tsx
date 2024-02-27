import { getAllCourses } from "@/utils/fetch";
import { cn } from "@/utils/style";
import Link from "next/link";

export default async function Page() {
  const courses = await getAllCourses();
  if (!courses) return null;
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Course</h2>
      <div className="flex flex-col gap-4">
        {courses.map((course, index) => (
          <Link
            href={"/dashboard/course/" + course.id}
            key={index}
            className={cn("transition-all ease-in hover:opacity-70")}
          >
            {course.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
