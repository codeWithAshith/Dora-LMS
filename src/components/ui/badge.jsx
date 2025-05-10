const CourseBadge = ({ type }) => {
  const badgeStyles = {
    new: "bg-gradient-to-r from-blue-500 to-blue-700 text-white",
    trending: "bg-gradient-to-r from-orange-400 to-orange-600 text-white",
    popular: "bg-gradient-to-r from-purple-500 to-purple-700 text-white",
    "best seller": "bg-gradient-to-r from-green-500 to-green-700 text-white",
  };

  const label = type?.toUpperCase();
  const style = badgeStyles[type?.toLowerCase()] || "bg-gray-600 text-white";
  if (type !== null && type !== "")
    return (
      <div className="absolute top-3 left-3 z-10">
        <span
          className={`px-3 py-1 text-[11px] font-semibold rounded-full shadow-md border border-white/20 ${style}`}
        >
          {label}
        </span>
      </div>
    );
};

export default CourseBadge;
