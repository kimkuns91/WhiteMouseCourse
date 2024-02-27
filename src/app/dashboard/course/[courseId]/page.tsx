import { getCourseById } from "@/utils/fetch";

interface PageProps {
  params: {
    courseId: string;
  };
}
export default async function Page({ params }: PageProps) {
  const course = await getCourseById(params.courseId);
  if (!course) return null;
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Course</h2>
      <div className="flex flex-col gap-4">{JSON.stringify(course)}</div>
    </div>
  );
}
