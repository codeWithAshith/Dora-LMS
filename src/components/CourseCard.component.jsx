import { Star } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CourseBadge from "./ui/badge";

const CourseCard = ({
  title,
  image,
  instructor,
  price,
  rating,
  category,
  badge,
}) => {
  return (
    <Card className="w-full max-w-xs bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 transform hover:scale-110"
          priority
        />
      </div>

      <CourseBadge type={badge} />

      <CardContent className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>
        {category && (
          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md">
            {category}
          </span>
        )}
        <p className="text-sm text-muted-foreground">by {instructor}</p>

        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < rating ? "fill-yellow-500" : "fill-gray-300"
              }`}
            />
          ))}
          <span className="text-sm ml-1 text-gray-500">{rating}/5</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 flex items-center justify-between">
        <span className="font-semibold text-lg text-primary">₹{price}</span>
        <Button
          size="sm"
          variant="outline"
          className="bg-primary text-white hover:bg-secondary"
        >
          View Course
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
