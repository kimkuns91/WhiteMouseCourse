import prisma from "@/libs/prisma";

export const getAllCourses = async () => {
  try {
    const courses = await prisma.course.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return courses;
  } catch (error) {
    console.error("Error getAllCourses Function :", error);
    throw new Error("Fetching courses failed");
  }
};

export const getCourseById = async (id: string) => {
  try {
    const course = await prisma.course.findUnique({
      where: {
        id,
      },
    });

    if (!course) {
      throw new Error("Course not found");
    }

    return course;
  } catch (error) {
    console.error("Error in getCourseById Function:", error);
    throw new Error("Fetching course failed");
  }
};

export const getChaptersAndLecturesByCourseId = async (courseId: string) => {
  try {
    const courseWithChaptersAndLectures = await prisma.course.findUnique({
      where: {
        id: courseId,
      },
      include: {
        chapters: {
          include: {
            lectures: true, // 각 챕터에 속한 렉처들을 포함하여 가져옵니다.
          },
        },
      },
    });

    if (!courseWithChaptersAndLectures) {
      throw new Error("Course not found");
    }

    return courseWithChaptersAndLectures;
  } catch (error) {
    console.error("Error in getChaptersAndLecturesByCourseId Function:", error);
    throw new Error("Fetching chapters and lectures failed");
  }
};

export const getLectureById = async (id: string) => {
  try {
    const lecture = await prisma.lecture.findUnique({
      where: {
        id,
      },
    });

    if (!lecture) {
      throw new Error("Course not found");
    }

    return lecture;
  } catch (error) {
    console.error("Error in getLectureById Function:", error);
    throw new Error("Fetching lecture failed");
  }
};
