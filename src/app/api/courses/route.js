import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const courses = await prisma.course.findMany({
            orderBy: {createdAt: 'desc'},
        })
        return Response.json({success:true, data:courses})
    } catch (error) {
        console.error("Error fetching courses: ", error);
        return Response.json({success: false, message: "Failed to fetch courses"})
    }
}