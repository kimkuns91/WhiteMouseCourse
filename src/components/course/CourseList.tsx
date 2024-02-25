import { cn } from "@/utils/style";
import { Course } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CourseListProps {
  course: Course[];
}
// type Course = {
//   id: string;
//   title: string;
//   difficulty: string;
//   category: string;
//   technologies: string[];
//   videoCount: number;
//   duration: string;
//   description: string;
//   createdAt: Date;
//   publishedAt: Date | null;
//   updatedAt: Date | null;
//   isFree: boolean;
// }
const CourseList: React.FC<CourseListProps> = ({ course }) => {
  return (
    <div
      className={cn("flex h-screen w-full items-center justify-center gap-4")}
    >
      {course.map((item, index) => (
        <Link href={`/course/${item.id}`} key={index}>
          <Image src={item.image} alt={item.title} width={300} height={0} />
          <div
            className={cn(
              "flex flex-col items-center justify-center rounded-md bg-slate-200"
            )}
          >
            <h2>{item.title}</h2>
            <h2>{JSON.stringify(item.technologies)}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
