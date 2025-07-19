import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
    const { email_id, password, username } = await req.json();
    console.log("email_id:", email_id);

    const existingUser = await prisma.users.findFirst({
        where: { email_id },
    });

    console.log(existingUser)

    if (existingUser) {
        return Response.json({
            success: false,
            message: 'User already exists with this email',
        });
    }

    const newUser = await prisma.users.create({
        data: {
            email_id,
            password,
            username,
            created_at: new Date(),
        },
    });

    return Response.json({
        success: true, data: {
            id: newUser.id.toString(),
            email_id: newUser.email_id,
            username: newUser.username,
            created_at: newUser.created_at,
        }
    });
}
