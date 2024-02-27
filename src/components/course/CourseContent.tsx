"use client";

import { cn } from "@/utils/style";
import { Lecture } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import CourseButton from "./CourseButton";
import CourseLink from "./CourseLink";

interface CourseContentProps {
  userId: string;
  courseId: string;
  prevLecture?: string | null;
  lecture: Lecture;
  nextLecture?: string | null;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CourseContent: React.FC<CourseContentProps> = ({
  userId,
  courseId,
  prevLecture,
  lecture,
  nextLecture,
  isOpen,
  setIsOpen,
}) => {
  const router = useRouter();

  // 비디오가 끝났을 때 호출되는 함수
  const handleVideoEnd = async () => {
    // 다음 강의로 이동하기 전에 현재 강의 완료 정보를 서버에 전송
    try {
      await axios.post("/api/completedLectures", {
        userId, // 사용자 ID
        lectureId: lecture.id, // 현재 강의 ID
      });
      console.log("Lecture completed");
    } catch (error) {
      console.error("Error completing lecture:", error);
    } finally {
      if (nextLecture) {
        // 다음 강의로 이동
        router.push(`/course/${courseId}/lecture/${nextLecture}`);
      }
    }
  };

  return (
    <div className={cn("scrollbar w-full overflow-y-scroll p-8", 'bg-[#FFFFFF]')}>
      <div className={cn("container flex flex-col gap-8")}>
        <div className="mb-8 flex w-full items-center justify-between">
          <button
            className="text-3xl"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <RiMenuFoldLine /> : <RiMenuUnfoldLine />}
          </button>
          <CourseLink href={"/course/" + courseId}>로비로 나가기</CourseLink>
        </div>
        <h2 className="text-3xl font-bold"># {lecture.title}</h2>
        <video
          className="aspect-video bg-slate-200"
          controls
          src={lecture.videoUrl}
          onEnded={handleVideoEnd}
        />
        <div className="mb-8 flex w-full items-center justify-between">
          <CourseButton
            className={cn(prevLecture ? "" : "bg-slate-200")}
            onClick={() => {
              router.push("/course/" + courseId + "/course/" + prevLecture);
            }}
            disabled={!prevLecture}
          >
            이전 강의
          </CourseButton>
          <CourseButton
            className={cn(nextLecture ? "" : "bg-slate-200")}
            onClick={() => {
              router.push("/course/" + courseId + "/lecture/" + nextLecture);
            }}
            disabled={!nextLecture}
          >
            다음 강의
          </CourseButton>
        </div>
        {lecture.githubUrl && <Link href={lecture.githubUrl}>GitHub</Link>}
        {/* {typeof window !== "undefined" && (
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(lecture.description),
            }}
          />
        )} */}
      </div>
    </div>
  );
};

export default CourseContent;
