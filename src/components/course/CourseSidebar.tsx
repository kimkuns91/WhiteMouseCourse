import { cn } from "@/utils/style";
import { Lecture } from "@prisma/client";
import Link from "next/link";
import ProgressBar from "./ProgressBar";

interface ChapterWithLectures {
  id: string;
  title: string;
  courseId: string;
  lectures: Lecture[];
}

interface CourseSidebarProps {
  title: string;
  chapters: ChapterWithLectures[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CourseSidebar: React.FC<CourseSidebarProps> = ({
  title,
  chapters,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div
      className={cn(
        "scrollbar h-full w-[400px] overflow-y-auto bg-[#A5EBFF]",
        "transition-all ease-in-out",
        isOpen ? "ml-0" : "ml-[-400px]"
      )}
    >
      <div className="flex flex-col gap-4 bg-[#83D3FC] p-8 text-center">
        <h2>{title}</h2>
        <ProgressBar color="blue" statistics={1} />
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
              <h2 className="w-full bg-[#83D3FC] px-6 py-4">
                # {chapter.title}
              </h2>
              {Array.isArray(chapter.lectures) &&
                chapter.lectures.map((lecture, index) => (
                  <Link
                    key={index}
                    className={cn(
                      "w-full  px-6 py-4 text-left",
                      index % 2 !== 0 ? "bg-[#D0F2FE]" : "bg-[#E3F9FF]"
                    )}
                    href={
                      "/course/" + chapter.courseId + "/lecture/" + lecture.id
                    }
                  >
                    {lecture.title}
                  </Link>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CourseSidebar;
