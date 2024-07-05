import React from "react";
import { Devider } from "./shared";

interface SkeletonsProps {
  count: number;
}

const Skeleton = () => {
  return (
    <div className="space-y-2 shadow-post flex flex-col bg-gradient-to-r from-[#1d3963] via-[#0b2a58] to-[#1b335b] rounded p-3">
      <div className="h-[180px] rounded bg-slate-700"></div>
      <div className="w-full h-10 bg-slate-700 rounded"></div>
      <div className="w-2/3 h-6 bg-slate-700 rounded"></div>
      <Devider />
      <div className="flex flex-row gap-2">
        <div className="w-full h-9 bg-slate-700 rounded"></div>
        <div className="w-full h-9 bg-slate-700 rounded"></div>
      </div>
    </div>
  );
};

const Skeletons: React.FC<SkeletonsProps> = ({ count }) => {
  return (
    <div>
      <div className="animate-pulse flex justify-between items-center w-full gap-5 mb-3">
        <div className="h-8 w-52 bg-slate-700"></div>
        <div className="h-8 w-40 bg-slate-700"></div>
      </div>
      <div className="animate-pulse rounded grid max-w-full grid-cols-post md:py-2 gap-5">
        {Array.from(Array(count).keys()).map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skeletons;
