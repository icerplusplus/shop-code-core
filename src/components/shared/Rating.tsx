"use client";
import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

interface RatingProps {
  value: number;
}
const newArr = (arr: number[], value: number) =>
  arr.map((_, index) => {
    if (index < value) return 1;
    return 0;
  });

export const Rating: React.FC<RatingProps> = ({ value }) => {
  const [arr, setArr] = React.useState<number[]>([0, 0, 0, 0, 0]);
  const ratingId = React.useId();

  React.useEffect(() => {
    const newLs = newArr(arr, value);
    setArr(newLs);
  }, []);

  return (
    <span className="flex flex-row">
      {arr.map((item) => (
        <TiStarFullOutline
          key={ratingId}
          color={item === 1 ? "#FEBC0B" : "#CCCCCC"}
        />
      ))}
    </span>
  );
};
