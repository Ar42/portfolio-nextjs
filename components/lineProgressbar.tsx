import React from "react";

interface LineProgressbarINT {
  className: string;
  width: number;
  height?: number;
  max_width?: number;
  containerClassName?: string;
}

const LineProgressbar = ({
  className,
  containerClassName,
  height = 4,
  width,
  max_width = 260,
}: LineProgressbarINT) => {
  return (
    <div
      className={`${containerClassName}`}
      style={{
        width: `${max_width}px`,
        height: `${height}px`,
      }}
    >
      <div
        className={`${className} line_progress_animation transition-all duration-75`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></div>
    </div>
  );
};

export default LineProgressbar;
