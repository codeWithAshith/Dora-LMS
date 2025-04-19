import Image from "next/image";
import quiz from '../../assests/quiz-1.jpg'


export default function QuizCard({ image, price = 29, title, rating = 4.9, questions = 30, students = 120 }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group transition hover:shadow-lg">
      <div className="relative">
        <Image src={quiz} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute top-3 right-3 bg-white text-pink-600 font-semibold text-sm px-3 py-1 rounded-full shadow">
          ${price}
        </span>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-500">Quiz</p>
        <h3 className="text-md font-semibold leading-snug mt-1 mb-3">{title}</h3>

        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
          <span>{rating}/5</span>
          <span className="text-yellow-400">★</span>
          <span className="ml-auto cursor-pointer text-gray-500 hover:text-pink-600">🛒</span>
        </div>

        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            📄 <span>{questions} Question</span>
          </div>
          <div className="flex items-center gap-1">
            👤 <span>{students} Students</span>
          </div>
        </div>
      </div>
    </div>
  );
}
