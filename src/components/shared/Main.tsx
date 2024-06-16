import React from "react";
import { ChildrenProps } from "../utils";
import { Header } from "./Header";

export const Main: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="flex flex-col p-4 w-full gap-5">
      <Header />
      <main className="h-full">{children}</main>
    </div>
  );
};
