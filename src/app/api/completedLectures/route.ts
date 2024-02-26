import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log('왔다!')
  const body = await request.json();
  const { userId, lectureId } = body;
  try {
    console.log("userId : ", userId);
    console.log("lectureId : ", lectureId);
    const completedLecture = await prisma.completedLecture.create({
      data: {
        userId,
        lectureId,
        completedAt: new Date(),
      },
    });
    return NextResponse.json(completedLecture, { status: 200 });
  } catch (error) {
    return NextResponse.error();
  }
}
