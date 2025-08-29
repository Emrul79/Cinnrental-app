// export default function Rating({ value }) {
//   const stars = Array(value).fill(rating);

//   return stars.map((star, index) => {
//     return <img key={index} src={star} alt="rating" height="14" width="14" />;
//   });
// }
import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function Rating({ value = 0, onChange }) {
  const [rating, setRating] = useState(value);

  const handleClick = (index) => {
    setRating(index + 1);
    if (onChange) {
      onChange(index + 1);
    }
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className="cursor-pointer text-2xl"
          onClick={() => handleClick(index)}
        >
          {index < rating ? (
            <FaStar className="text-green-500" />
          ) : (
            <FaRegStar className="text-gray-400" />
          )}
        </span>
      ))}
    </div>
  );
}
