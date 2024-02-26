"use client";

import { cn } from "@/utils/style";
import { Course, Lecture } from "@prisma/client";
import axios from "axios";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
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
  userId: string | undefined;
  courseData: CourseData;
  lectureId: string;
}

const CourseContainer: React.FC<CourseContainerProps> = ({
  userId,
  courseData,
  lectureId,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [completedLectures, setCompletedLectures] = useState([]);
  console.log("completedLectures : ", completedLectures);
  // 모든 강의를 단일 배열로 결합
  const allLectures = courseData.chapters.flatMap(
    (chapter) => chapter.lectures
  );

  // 현재 강의의 인덱스 찾기
  const currentIndex = allLectures.findIndex(
    (lecture) => lecture.id === lectureId
  );

  // 현재 강의 결정
  const lecture = allLectures[currentIndex];

  // 이전 및 다음 강의 결정
  const prevLecture = currentIndex > 0 ? allLectures[currentIndex - 1] : null;
  const nextLecture =
    currentIndex < allLectures.length - 1
      ? allLectures[currentIndex + 1]
      : null;

  useEffect(() => {
    if (!userId) {
      return redirect("/login");
    }
  }, [userId]);

  useEffect(() => {
    const fetchCompletedLectures = async () => {
      if (!userId || !courseData.id) return;
      try {
        const response = await axios.get(
          `/api/completedLectures/${userId}?courseId=${courseData.id}`
        );
        setCompletedLectures(response.data);
      } catch (error) {
        console.error("Failed to fetch completed lectures:", error);
      }
    };

    fetchCompletedLectures();
  }, [userId, courseData.id]);

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-50",
        "h-screen w-full bg-white",
        "flex flex-col"
      )}
    >
      <div className="flex size-full">
        <CourseSidebar
          completedLectures={completedLectures}
          title={courseData.title}
          chapters={courseData.chapters}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        {lecture ? (
          <CourseContent
            userId={userId!}
            courseId={courseData.id}
            prevLecture={prevLecture?.id}
            lecture={lecture}
            nextLecture={nextLecture?.id}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        ) : (
          <div>Lecture not found</div>
        )}
      </div>
    </div>
  );
};

export default CourseContainer;
