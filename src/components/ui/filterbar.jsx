import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const FilterBar = ({ onStatusFilterChange }) => {
  return (
    <div className="mb-8 flex justify-center">
      {/* Status Filter */}
      <div className="w-48">
        <Select onValueChange={onStatusFilterChange}>
          <SelectTrigger className="w-full py-2 px-4 rounded-lg shadow-md border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500 transition duration-200">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent className="w-full">
          <SelectItem value="All">All</SelectItem>
            <SelectItem value="New">New</SelectItem>
            <SelectItem value="Trending">Trending</SelectItem>
            <SelectItem value="Best Seller">Best Seller</SelectItem>
            <SelectItem value="Popular">Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};


export default FilterBar;
