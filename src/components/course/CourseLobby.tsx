import { Course, Lecture } from "@prisma/client";
import Link from "next/link";

interface ChapterWithLectures {
  id: string;
  title: string;
  courseId: string;
  lectures: Lecture[];
}

interface CourseData extends Course {
  chapters: ChapterWithLectures[];
}

interface CourseLobbyProps {
  courseData: CourseData;
}

const CourseLobby: React.FC<CourseLobbyProps> = ({ courseData }) => {
  const { chapters } = courseData;

  return (
    <div className="container flex">
      <h1>{courseData.title}</h1>
      <div>
        {Array.isArray(chapters) &&
          chapters.map((chapter, index) => (
            <div key={index}>
              <h2>{chapter.title}</h2>
              <div>
                {Array.isArray(chapter.lectures) &&
                  chapter.lectures.map((lecture) => (
                    <div key={lecture.id}>
                      <Link
                        href={`/course/${courseData.id}/lecture/${lecture.id}`}
                      >
                        <h3>{lecture.title}</h3>
                        <p>Duration: {lecture.videoLength}</p>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CourseLobby;
