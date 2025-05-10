"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CounterStat from "@/components/ui/counter-stat";
import { GraduationCap, Clock, Award, Users } from "lucide-react";

const AboutPage = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Expert Instructors",
      desc: "Learn from professionals with real-world experience.",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Flexible Learning",
      desc: "Access courses anytime, anywhere, at your own pace.",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Certified Programs",
      desc: "Earn certificates that boost your resume and credibility.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Community Support",
      desc: "Join a thriving community of learners and mentors.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 lg:px-20 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-blue-800">
          Learn. Grow. Succeed.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          We are on a mission to provide world-class education and resoruces to
          learners across the globe.
        </p>
        <Link href="/courses">
          <Button className="text-white bg-blue-700 hover:bg-blue-800 px-6 py-3 text-lg rounded-xl cursor-pointer">
            Explore Courses
          </Button>
        </Link>

        {/* Line Separator */}
        <div
          className="mx-auto w-[20%] h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 my-12"
          style={{
            filter: "blur(3px)", // Blurring effect for a soft touch
          }}
        ></div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
          <div>
            <CounterStat end={5000} />
            <p className="mt-2 text-gray-600">Students Enrolled</p>
          </div>
          <div>
            <CounterStat end={120} />
            <p className="mt-2 text-gray-600">Courses Offered</p>
          </div>
          <div>
            <CounterStat end={85} />
            <p className="mt-2 text-gray-600">Expert Instructors</p>
          </div>
          <div>
            <CounterStat end={98} />
            <p className="mt-2 text-gray-600">Satisfaction Rate</p>
          </div>
        </div>

        {/* Line Separator */}
        <div
          className="mx-auto w-[20%] h-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 my-12"
          style={{
            filter: "blur(3px)", // Blurring effect for a soft touch
          }}
        ></div>
      </motion.div>

      {/* Why US Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white shadow-md hover:shadow-lg rounded-xl border border-gray-100 transition"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Line Separator */}
        <div
          className="mx-auto w-[20%] h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 my-12"
          style={{
            filter: "blur(3px)", // Blurring effect for a soft touch
          }}
        ></div>
      </motion.div>


      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 py-16 px-6 rounded-2xl shadow-inner mt-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Ready to start learning?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of learners today. Boost your skills and career with
            our expert-led courses.
          </p>
          <Link href="/courses">
            <Button className="text-white bg-indigo-600 hover:bg-indigo-700 px-8 py-4 text-lg rounded-xl transition cursor-pointer">
              Enroll Now
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
