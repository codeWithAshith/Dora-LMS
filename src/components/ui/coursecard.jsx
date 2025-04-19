import Image from "next/image";
import lmslanding from '../../assests/Lms-landing-page-1.jpg'


export default function CourseCard() {
    return (
        <div className="w-full max-w-xs bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative">
          <Image
            src={lmslanding}
            alt="Course"
            className="w-full h-48 object-cover"
          />
          <span className="absolute top-2 left-2 bg-white text-pink-600 font-semibold rounded-full px-3 py-1 text-sm shadow">
            $29
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Complete JavaScript Course From Zero to Expert!
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500">★</span>
            <span className="text-sm font-medium">4.9/5</span>
            <button className="ml-auto text-gray-600 hover:text-black">
              🛒
            </button>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
            <div className="flex items-center gap-1">
              📘 <span>03 Lessons</span>
            </div>
            <div className="flex items-center gap-1">
              👥 <span>120 Students</span>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
  
