import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = ({ to = -1, label = "Back" }) => {
  return (
    <Link
      to={to}
      className="
        inline-flex items-center gap-2
        px-4 py-2
        rounded-full
        border border-gray-300
        bg-white
        text-gray-800
        font-medium
        shadow-sm
        hover:bg-gray-100
        hover:shadow-md
        transition-all
        duration-200
      "
    >
      <FaArrowLeft className="text-sm" />
      {label}
    </Link>
  );
};

export default BackButton;
