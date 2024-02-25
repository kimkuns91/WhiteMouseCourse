import CourseList from "@/components/course/CourseList";
import { getAllCourses } from "@/utils/fetch";

export default async function Page() {
  const course = await getAllCourses();
  return <CourseList course={course} />;
}
