import { cn } from "@/utils/style";
import { Course, Lecture } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ChapterWithLectures {
  id: string;
  title: string;
  courseId: string;
  lectures: Lecture[];
}

interface CourseData extends Course {
  chapters: ChapterWithLectures[];
}

interface CourseLobbyProps {
  courseData: CourseData;
}

const CourseLobby: React.FC<CourseLobbyProps> = ({ courseData }) => {
  const { chapters } = courseData;

  return (
    <div className="container flex min-h-screen justify-between py-20">
      <div>
        <Image
          src={courseData.image}
          alt={courseData.title}
          width={300}
          height={0}
          className="rounded-md"
        />
        <h1>{courseData.title}</h1>
      </div>
      <div className="flex flex-col gap-4">
        {Array.isArray(chapters) &&
          chapters.map((chapter, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col rounded-xl text-left",
                "overflow-hidden"
              )}
            >
              <h2 className="w-full bg-[#71d0ff] px-6 py-4">
                # {chapter.title}
              </h2>
              <div>
                {Array.isArray(chapter.lectures) &&
                  chapter.lectures.map((lecture, index) => (
                    <Link
                      key={index}
                      href={`/course/${courseData.id}/lecture/${lecture.id}`}
                      className={cn(
                        "w-full  px-6 py-4 text-left",
                        "flex items-center justify-between",
                        index % 2 !== 0 ? "bg-[#D0F2FE]" : "bg-[#E3F9FF]"
                      )}
                    >
                      <h3>{lecture.title}</h3>
                      <p>Duration: {lecture.videoLength}</p>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CourseLobby;
