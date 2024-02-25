import CourseLobby from "@/components/course/CourseLobby";
import { getChaptersAndLecturesByCourseId } from "@/utils/fetch";

interface PageProps {
  params: {
    courseId: string;
  };
}

export default async function Page({ params }: PageProps) {
  const courseData = await getChaptersAndLecturesByCourseId(params.courseId);
  // console.log('courseData :', courseData)
  // const chapters = courseData.chapters;
  return <CourseLobby courseData={courseData} />;
}
