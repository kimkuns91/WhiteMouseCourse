import CourseLobby from "@/components/course/CourseLobby";
import { getChaptersAndLecturesByCourseId } from "@/utils/fetch";

interface PageProps {
  params: {
    courseId: string;
  };
}

export default async function Page({ params }: PageProps) {

  const courseData = await getChaptersAndLecturesByCourseId(params.courseId);
  return <CourseLobby courseData={courseData} />;
}
