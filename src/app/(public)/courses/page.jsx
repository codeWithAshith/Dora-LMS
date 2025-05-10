"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard.component";
import FilterBar from "@/components/ui/filterbar";
import SortCourses from "@/components/ui/sortcourses";
import SearchBar from "@/components/ui/searchbar";

const CoursesPage = () => {
    const mockCourses = [
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
      ];
      

  const [filteredCourses, setFilteredCourses] = useState(mockCourses);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterCourses(query);
  };

  const handleStatusFilterChange = (status) => {
    let updatedCourses = mockCourses;
    if (status !== "All") {
      updatedCourses = updatedCourses.filter(
        (course) => course.badge === status
      );
    }
    setFilteredCourses(updatedCourses);
  };

  const handleSortChange = (sortType) => {
    let sortedCourses = [...filteredCourses];
    if (sortType === "price-low-high") {
      sortedCourses = sortedCourses.sort((a, b) => a.price - b.price);
    } else if (sortType === "price-high-low") {
      sortedCourses = sortedCourses.sort((a, b) => b.price - a.price);
    } else if (sortType === "rating-high-low") {
      sortedCourses = sortedCourses.sort((a, b) => b.rating - a.rating);
    } else if (sortType === "rating-low-high") {
      sortedCourses = sortedCourses.sort((a, b) => a.rating - b.rating);
    }
    setFilteredCourses(sortedCourses);
  };

  const filterCourses = (query) => {
    if (query) {
      setFilteredCourses(
        mockCourses.filter((course) =>
          course.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredCourses(mockCourses);
    }
  };

  return (
    <div className="container mx-auto px-4 py-5">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Explore Courses
      </h1>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Filter Section */}
      {/* Filter and Sort Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 px-2 md:px-0 gap-4 sm:gap-0">
        <div className="sm:w-auto">
          <FilterBar onStatusFilterChange={handleStatusFilterChange} />
        </div>
        <div className="sm:w-auto">
          <SortCourses onSortChange={handleSortChange} />
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            image={course.image}
            instructor={course.instructor}
            price={course.price}
            rating={course.rating}
            badge={course.badge}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
