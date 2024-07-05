import React from "react";

interface IconButtonProps {
  children: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ children }) => {
  return (
    <button className="bg-gradient-to-br from-[#0A274E] to-[#06438F] h-fit m-2 p-2 shadow-post rounded duration-[3000ms]">
      {children}
    </button>
  );
};

export default IconButton;
