"use client";

import { cn } from "@/utils/style";
import { Lecture } from "@prisma/client";
import DOMPurify from "dompurify";
import Link from "next/link";

interface CourseContentProps {
  lecture: Lecture;
}

const CourseContent: React.FC<CourseContentProps> = ({ lecture }) => {
  return (
    <div className={cn("scrollbar w-full overflow-y-scroll p-8")}>
      <div className={cn("flex flex-col gap-4")}>
        <h2>{lecture.title}</h2>
        <video
          className="aspect-video bg-slate-200"
          controls
          src={lecture.videoUrl}
        />
        {lecture.githubUrl && <Link href={lecture.githubUrl}>GitHub</Link>}
        {typeof window !== "undefined" && (
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(lecture.description),
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CourseContent;
