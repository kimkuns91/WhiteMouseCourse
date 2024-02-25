const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.create({
    data: {
      title: "Next.js 14 기초 강의",
      image: 'https://fdztdyzyoycbijbfdoyr.supabase.co/storage/v1/object/public/images/nextjs.webp',
      difficulty: "초급",
      category: "NextJS",
      technologies: ["NextJS", "React"],
      videoCount: 15,
      duration: "10 hours",
      description:
        "Start your journey into the world of NextJS with this introductory course...",
      createdAt: new Date(),
      publishedAt: new Date(),
      isFree: true, 
      chapters: {
        create: [
          {
            title: "[🔥 2024 UPDATE 🔥] INTRODUCTION",
            lectures: {
              create: [
                {
                  title: "Welcome",
                  videoUrl: "https://fdztdyzyoycbijbfdoyr.supabase.co/storage/v1/object/public/videos/123.mp4",
                  videoLength: "20 minutes",
                  description:
                    "<p>Understanding Python syntax for data science...</p>",
                },
                {
                  title: "Requirements",
                  videoUrl: "https://fdztdyzyoycbijbfdoyr.supabase.co/storage/v1/object/public/videos/123.mp4",
                  videoLength: "40 minutes",
                  description:
                    "<p>Learn how to manipulate data with Pandas...</p>",
                },
              ],
            },
          },
          {
            title: "[🔥 2024 UPDATE 🔥] ROUTING",
            lectures: {
              create: [
                {
                  title: "Introduction",
                  videoUrl: "https://fdztdyzyoycbijbfdoyr.supabase.co/storage/v1/object/public/videos/123.mp4",
                  videoLength: "30 minutes",
                  description:
                    "<p>Learn to visualize data with Matplotlib...</p>",
                },
                {
                  title: "Defining Routes",
                  videoUrl: "https://fdztdyzyoycbijbfdoyr.supabase.co/storage/v1/object/public/videos/123.mp4",
                  videoLength: "45 minutes",
                  description:
                    "<p>Explore advanced visualization techniques for data analysis...</p>",
                },
              ],
            },
          },
        ],
      },
    },
    include: {
      chapters: {
        include: {
          lectures: true,
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
