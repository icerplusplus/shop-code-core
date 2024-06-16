import React from "react";

interface ButtonProps {
    title: string
}

export const Button: React.FC<ButtonProps> = ({title}) => {
  return (
    <button className='px-5 py-2 w-fit rounded-md neon-shadow'>
      <p className="z-99 text-white">{title}</p>
    </button>
  );
};
