import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userIdParam = searchParams.get("user_id");

    const userId = parseInt(userIdParam ?? "", 10);
    if (!userId) {
      return Response.json(
        { error: "Missing or invalid user_id" },
        { status: 400 }
      );
    }

    // 1️⃣ Get UserCourse rows
    const userCourses = await prisma.userCourse.findMany({
      where: { userId },
    });

    if (userCourses.length === 0) {
      return Response.json([]);
    }

    // 2️⃣ Extract course IDs
    const courseIds = userCourses.map((uc) => uc.courseId);

    // 3️⃣ Get Courses
    const courses = await prisma.course.findMany({
      where: { id: { in: courseIds } },
    });

    // 4️⃣ Merge
    const result = courses.map((course) => {
      const uc = userCourses.find((uc) => uc.courseId === course.id);
      return {
        id: course.id,
        title: course.title,
        description: "", // No description in schema — adjust if needed
        image : course.image,
        instructor:course.instructor,
        price:course.price,
        rating:course.rating,
        badge:uc?.courseStatus ?? "Unknown",
        status: uc?.courseStatus ?? "Unknown",
      };
    });

    return Response.json(result);
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Internal Server Error", details: err instanceof Error ? err.message : err },
      { status: 500 }
    );
  }
}
