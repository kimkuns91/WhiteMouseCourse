import CourseIntro from "@/components/course/CourseIntro";
import { getCourseById } from "@/utils/fetch";

interface PageProps {
  params: {
    courseId: string;
  };
}

export default async function Page({ params }: PageProps) {
  const course = await getCourseById(params.courseId);

  if (!course) return null;
  
  return <CourseIntro course={course} />;
}
