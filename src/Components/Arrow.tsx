import React from "react";
import { CustomArrowProps } from "react-slick";

interface NextArrowProps extends CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
}

const CustomNextArrow: React.FC<NextArrowProps> = ({
  onClick,
  className,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      className={`arrow absolute right-4 top-20 ${className}`}
      style={{ ...style }}
    >
      <div className="arrow-button hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          ></path>
        </svg>
      </div>
    </button>
  );
};

const CustomPrevArrow: React.FC<NextArrowProps> = ({
  onClick,
  className,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      className={`arrowkiri absolute left-4 z-20 bottom-0 top-28 ${className}`}
      style={{ ...style }}
    >
      <div className="arrow-button hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          ></path>
        </svg>
      </div>
    </button>
  );
};

export { CustomNextArrow, CustomPrevArrow };
