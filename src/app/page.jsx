'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import lmslanding from '../assests/Lms-landing-page-1.jpg'
import CourseCard from "../components/ui/coursecard";
import QuizCard from "../components/ui/quizcard";

const Home = () => {
  const router = useRouter()
  const data = [
    {
      title: "50K+ Online Courses",
      subtitle: "Enjoy lifetime access to courses",
    },
    {
      title: "Top Industry Experts",
      subtitle: "Top instructors around world",
    },
    {
      title: "Explore Categories",
      subtitle: "Build your library for career",
    },
  ];
  return (
    // <div className="flex flex-col justify-center items-center min-h-screen bg-background p-6 w-full">
    //   <div className="text-center">
    //     <h1>Welcome to Dora LMS</h1>
    //     <p>Your learning journey starts here!</p>
    //     <Button className="mt-3" style={{ marginRight: '10px' }} onClick={()=> router.push('/viewcontents')}>Get Started</Button>
    //     <Button>Sign Up</Button>
    //   </div>
    // </div>
    <div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-700 min-h-screen flex flex-col justify-center items-start px-8 text-white relative overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-bold max-w-2xl">
          Get unlimited access to <span className="text-pink-400">5000+ courses.</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg">
          Choose from over 100,000 online video courses with new additions published every month.
        </p>

        <div className="mt-6 w-full max-w-md outline outline-2 outline-blue-500">
          <input
            type="text"
            placeholder="🔍 Search for course, skills and Videos."
            className="w-full px-5 py-3 rounded-lg text-black outline-none"
          />
        </div>

        {/* You can insert an SVG or image to mimic the laptop/phone look on the right */}
        <Image
          src={lmslanding}
          alt="Lms-landing-page-1"
          className="absolute right-0 bottom-0 w-2/5 h-5/5 hidden md:block"
        />
      </div>
      <div className="bg-white py-10 px-8 grid md:grid-cols-3 gap-8 text-center shadow-md rounded-xl -mt-10 max-w-6xl mx-auto relative z-10">
        {data.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Top Online Courses</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          The world’s largest selection of courses chosen from 130,000+ online video courses with new additions published every month.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>

        <Button className="mt-5" onClick={()=> router.push('/courses')}>
          View All Courses
        </Button>
      </div>

      <section className="bg-gray-50 px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Explore popular Quizzes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
        </div>

        <div className="mt-12 text-center">
          <Button className="mt-5" onClick={()=> router.push('/quiz')}>
            View All Quiz
          </Button>
        </div>
      </section>

    </div>

  );
};

export default Home;
