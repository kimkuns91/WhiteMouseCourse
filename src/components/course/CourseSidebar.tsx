import { cn } from "@/utils/style";
import { CompletedLecture, Lecture } from "@prisma/client";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import ProgressBar from "./ProgressBar";
interface ChapterWithLectures {
  id: string;
  title: string;
  courseId: string;
  lectures: Lecture[];
}

interface CourseSidebarProps {
  completedLectures: CompletedLecture[];
  title: string;
  chapters: ChapterWithLectures[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CourseSidebar: React.FC<CourseSidebarProps> = ({
  completedLectures,
  title,
  chapters,
  isOpen,
  setIsOpen,
}) => {
  const totalLectures = chapters.reduce(
    (total, chapter) => total + chapter.lectures.length,
    0
  );
  const completionRate =
    totalLectures > 0 ? completedLectures.length / totalLectures : 0;

  console.log(completionRate)
  return (
    <div
      className={cn(
        "scrollbar h-full w-[400px] overflow-y-auto bg-[#c3f2ff]",
        "transition-all ease-in-out",
        isOpen ? "ml-0" : "ml-[-400px]"
      )}
    >
      <div className="flex flex-col gap-4 bg-[#b6e7ff] p-8 text-center">
        <h2>{title}</h2>
        <ProgressBar color={'#71D0FF'} statistics={completionRate} />
      </div>
      <div className={cn("flex flex-col gap-12 p-8")}>
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
              {Array.isArray(chapter.lectures) &&
                chapter.lectures.map((lecture, index) => (
                  <Link
                    key={index}
                    className={cn(
                      "w-full  px-6 py-4 text-left",
                      "flex items-center justify-between",
                      index % 2 !== 0 ? "bg-[#D0F2FE]" : "bg-[#E3F9FF]"
                    )}
                    href={
                      "/course/" + chapter.courseId + "/lecture/" + lecture.id
                    }
                  >
                    {lecture.title}
                    {completedLectures.some(
                      (cl) => cl.lectureId === lecture.id
                    ) && <FaCheck className="size-5 text-green-500" />}
                  </Link>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CourseSidebar;
