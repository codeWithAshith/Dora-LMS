"use client";

import { useEffect, useState } from "react";
import CourseCard from "@/components/CourseCard.component";
import FilterBar from "@/components/ui/filterbar";
import SortCourses from "@/components/ui/sortcourses";
import SearchBar from "@/components/ui/searchbar";
import axios from "axios";

export default function AllCoursesPage() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("/api/courses");
        const data = res.data.data ?? [];
        setCourses(data);
        setFilteredCourses(data);
      } catch (err) {
        console.error("Error fetching courses", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
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

  return (
    <div className="container mx-auto px-4 py-5">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        All Courses
      </h1>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Filter & Sort */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 px-2 md:px-0 gap-4 sm:gap-0">
        <div className="sm:w-auto">
          <FilterBar onStatusFilterChange={handleStatusFilterChange} />
        </div>
        <div className="sm:w-auto">
          <SortCourses onSortChange={handleSortChange} />
        </div>
      </div>

      {/* Course Grid */}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : filteredCourses.length === 0 ? (
        <p className="text-center text-gray-500">No courses found.</p>
      ) : (
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
      )}
    </div>
  );
}
