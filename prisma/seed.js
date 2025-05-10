import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.course.createMany({
        data: [
            {
                id: 1,
                title: "Mastering React for Web Development",
                image: "/assets/courses/react-js-course.jpg",
                instructor: "Jane Doe",
                avatar: "/assets/courses/man-avatar.png",
                price: 1299,
                rating: 4.8,
                category: "Frontend",
                badge: "Trending"
            },
            {
                id: 2,
                title: "Next.js Fullstack Bootcamp",
                image: "/assets/courses/next-js-course.png",
                instructor: "John Smith",
                avatar: "/assets/courses/man-avatar.png",
                price: 1499,
                rating: 4.7,
                category: "Full-Stack",
                badge: "Best Seller"
            },
            {
                id: 3,
                title: "UI/UX Design Essentials",
                image: "/assets/courses/ui-ux-course.jpg",
                instructor: "Lisa Ray",
                avatar: "/assets/courses/woman-avatar.png",
                price: 999,
                rating: 4.5,
                category: "Design",
                badge: "New"
            },
            {
                id: 4,
                title: "JavaScript from Scratch",
                image: "/assets/courses/js-course.jpg",
                instructor: "Michael Green",
                avatar: "/assets/courses/man-avatar.png",
                price: 899,
                rating: 4.2,
                category: "Frontend",
                badge: null
            },
            {
                id: 5,
                title: "Data Science with Python",
                image: "/assets/courses/data-science.jpg",
                instructor: "Sara Black",
                avatar: "/assets/courses/woman-avatar.png",
                price: 1999,
                rating: 4.9,
                category: "Data Science",
                badge: "Popular"
            },
            {
                id: 6,
                title: "Digital Marketing Mastery",
                image: "/assets/courses/digital-marketing.jpg",
                instructor: "Andrew White",
                avatar: "/assets/courses/man-avatar.png",
                price: 799,
                rating: 2,
                category: "Marketing",
                badge: null
            },
            {
                id: 7,
                title: "Web Design Principles",
                image: "/assets/courses/web-design.jpg",
                instructor: "Monica King",
                avatar: "/assets/courses/woman-avatar.png",
                price: 1299,
                rating: 4.6,
                category: "Design",
                badge: "Best Seller"
            },
            {
                id: 8,
                title: "Advanced Machine Learning",
                image: "/assets/courses/ml-course.jpg",
                instructor: "David Brown",
                avatar: "/assets/courses/man-avatar.png",
                price: 2499,
                rating: 5.0,
                category: "AI & ML",
                badge: "New"
            },
            {
                id: 9,
                title: "Business Strategy Fundamentals",
                image: "/assets/courses/business-strategy.jpg",
                instructor: "Emma Lee",
                avatar: "/assets/courses/woman-avatar.png",
                price: 1499,
                rating: 3,
                category: "Business",
                badge: null
            },
            {
                id: 10,
                title: "Full Stack Web Development Bootcamp",
                image: "/assets/courses/fullstack-course.jpg",
                instructor: "Chris Martin",
                avatar: "/assets/courses/man-avatar.png",
                price: 1799,
                rating: 4.4,
                category: "Full-Stack",
                badge: "Popular"
            }
        ]
    });

    console.log("Courses seeded!");
}

main()
    .catch((e) => console.error(e))
    .finally(() => prisma.$disconnect())