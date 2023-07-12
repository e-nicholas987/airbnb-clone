import React from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

interface ScrollButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    type="button"
    className="
      h-[30px] 
      w-[30px]
      rounded-full
      grid
      place-content-center
      bg-[rgb(255,255,255,0.9)] 
      border border-primary-border 
      hover:scale-[1.05]
      hover:shadow-lg
      hover:bg-[#fff]
      duration-300 
      transition-all "
  >
    {direction === "right" ? (
      <BiChevronRight size={25} className="no-pointer-events" />
    ) : (
      <BiChevronLeft size={25} />
    )}
  </button>
);

export default ScrollButton;
