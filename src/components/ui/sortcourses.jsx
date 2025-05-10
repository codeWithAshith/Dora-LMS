"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const SortCourses = ({ onSortChange }) => {
  return (
    <div className="w-48">
      <Select onValueChange={onSortChange}>
        <SelectTrigger className="w-full py-2 px-4 rounded-lg shadow-md border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500 transition duration-200">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="price-low-high">Price: Low to High</SelectItem>
          <SelectItem value="price-high-low">Price: High to Low</SelectItem>
          <SelectItem value="rating-high-low">Rating: High to Low</SelectItem>
          <SelectItem value="rating-low-high">Rating: Low to High</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortCourses;
