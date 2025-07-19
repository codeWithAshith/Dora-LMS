"use client";

import { useState, useEffect } from "react";
import CourseCard from "@/components/CourseCard.component";
import FilterBar from "@/components/ui/filterbar2";
import SortCourses from "@/components/ui/sortcourses";
import SearchBar from "@/components/ui/searchbar";
import axios from "axios";

export default function MyCoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("loggedInUser");
    const user = JSON.parse(stored ?? "{}");
    const userId = user.id;

    if (!userId) {
      setLoading(false);
      return;
    }

    axios
      .get(`/api/mycourses?user_id=${userId}`)
      .then((res) => setCourses(res.data ?? []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (query) => {
    if (query) {
      setFilteredCourses(
        courses.filter((course) =>
          course.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredCourses(courses);
    }
  };

  const handleStatusFilterChange = (status) => {
    let updatedCourses = courses;
    if (status !== "All") {
      updatedCourses = updatedCourses.filter(
        (course) => course.badge === status
      );
    }
    setFilteredCourses(updatedCourses);
  };


  return (
    <div className="container mx-auto px-4 py-5">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        My Courses
      </h1>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Filter & Sort */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 px-2 md:px-0 gap-4 sm:gap-0">
        <div className="sm:w-auto">
          <FilterBar onStatusFilterChange={handleStatusFilterChange} />
        </div>
      </div>

      {/* Course Grid */}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : courses.length === 0 ? (
        <p className="text-center text-gray-500">No courses found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
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
      )}
    </div>
  );
}
