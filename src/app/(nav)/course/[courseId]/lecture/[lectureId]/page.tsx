import CourseContainer from "@/components/course/CourseContainer";
import { authOptions } from "@/libs/next-auth";
import { getChaptersAndLecturesByCourseId } from "@/utils/fetch";
import { getServerSession } from "next-auth";

interface PageProps {
  params: {
    courseId: string;
    lectureId: string;
  };
}

export default async function Page({ params }: PageProps) {
  const session = await getServerSession(authOptions);
  const courseData = await getChaptersAndLecturesByCourseId(params.courseId);

  return (
    <CourseContainer
      userId={session?.user.id}
      courseData={courseData}
      lectureId={params.lectureId}
    />
  );
}
