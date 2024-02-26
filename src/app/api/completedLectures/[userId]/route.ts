import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  const searchParams = request.nextUrl.searchParams;
  const courseId = searchParams.get("courseId");
  try {
    console.log("userId :", userId);
    console.log("courseId :", courseId);
    const completedLectures = await prisma.completedLecture.findMany({
      where: {
        userId: userId,
        lecture: {
          chapter: {
            courseId: courseId,
          },
        },
      },
      include: {
        lecture: true,
      },
    });
    return NextResponse.json(completedLectures, { status: 200 });
  } catch (error) {
    return NextResponse.error();
  }
}
