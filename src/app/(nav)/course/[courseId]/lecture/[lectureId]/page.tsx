import CourseContainer from "@/components/course/CourseContainer";
import {
  getChaptersAndLecturesByCourseId
} from "@/utils/fetch";

interface PageProps {
  params: {
    courseId: string;
    lectureId: string;
  };
}

export default async function Page({ params }: PageProps) {
  const courseData = await getChaptersAndLecturesByCourseId(params.courseId);

  return <CourseContainer courseData={courseData} lectureId={params.lectureId} />;
}
