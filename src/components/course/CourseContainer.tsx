"use client";

import { cn } from "@/utils/style";
import { Course, Lecture } from "@prisma/client";
import { useState } from "react";
import CourseContent from "./CourseContent";
import CourseSidebar from "./CourseSidebar";

interface ChapterWithLectures {
  id: string;
  title: string;
  courseId: string;
  lectures: Lecture[];
}

interface CourseData extends Course {
  chapters: ChapterWithLectures[];
}

interface CourseContainerProps {
  courseData: CourseData;
  lectureId: string;
}

const CourseContainer: React.FC<CourseContainerProps> = ({
  courseData,
  lectureId,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const lecture = courseData.chapters
    .flatMap((chapter) => chapter.lectures)
    .find((lecture) => lecture.id === lectureId);

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-50",
        "h-screen w-full bg-white",
        "flex flex-col"
      )}
    >
      {/* <CourseHeader
        courseId={courseData.id}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      /> */}
      <div className="flex size-full">
        <CourseSidebar
          title={courseData.title}
          chapters={courseData.chapters}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        {lecture ? (
          <CourseContent lecture={lecture} />
        ) : (
          <div>Lecture not found</div>
        )}
      </div>
    </div>
  );
};

export default CourseContainer;
