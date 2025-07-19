import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const users = await prisma.Users.findMany({
            orderBy: { created_at: 'desc' }
        });

        const sanitizedUsers = users.map(user => ({
            ...user,
            id: user.id.toString(),  
        }));

        return Response.json({ success: true, data: sanitizedUsers });
    } catch (error) {
        console.error("Error fetching users: ", error);
        return Response.json({
            success: false,
            message: "Failed to fetch users",
            error: error.message,
        });
    }
}
