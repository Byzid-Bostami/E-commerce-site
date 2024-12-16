import React from "react";
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti";

const StarRating = ({ rating }) => {
  
  const fullStars = Math.floor(rating); 
  const hasHalfStar = rating % 1 >= 0.5; 
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); 
  
  return (
    <div className="flex space-x-1 text-yellow-400">
      {/* Full stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <TiStarFullOutline key={`full-${index}`} className="w-5 h-5" />
        ))}
      {/* Half star */}
      {hasHalfStar && <TiStarHalfOutline className="w-5 h-5" />}
      {/* Empty stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <TiStarOutline key={`empty-${index}`} className="w-5 h-5 text-gray-300" />
        ))}
    </div>
  );
};

export default StarRating;
