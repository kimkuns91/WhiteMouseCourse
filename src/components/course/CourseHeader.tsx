import { cn } from "@/utils/style";
import CourseButton from "./CourseButton";
import CourseLink from "./CourseLink";

interface CourseHeaderProps {
  courseId: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const CourseHeader: React.FC<CourseHeaderProps> = ({
  courseId,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div className={cn("w-full bg-[#70A4EC] px-8 py-6", "shadow-lg")}>
      <div className="flex items-center gap-14">
        <div className="flex w-[300px] items-center justify-between">
          <CourseLink href={"/course/" + courseId}>뒤로가기</CourseLink>
          <CourseButton
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "사이드바 숨기기" : "사이드바 열기"}
          </CourseButton>
        </div>
        <div className="flex flex-1 items-center justify-between">
          <CourseLink href={"/"}>이전 강의</CourseLink>
          <CourseLink href={"/"}>다음 강의</CourseLink>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
