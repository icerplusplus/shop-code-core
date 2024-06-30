"use client";
import { Section } from "@/components/shared";
import React from "react";
import { trpc } from "@/utils/trpc";
import "./index.css";

function HomePage() {
  const [sections, setSections] = React.useState<string[]>([])
  const getSections = async () => {
    const sections = await trpc.section["get-all-sections"].useQuery()
    const secs: any = await sections
    if(secs.data) setSections(secs.data)
  };
  getSections()

  return (
    <div className="flex flex-col gap-5">
      {/* Recommended List Section  */}
      <div className="space-y-5">
        {sections.map((section, i) => {
          return (
            <Section
              key={section+i}
              section={section}
            />
          )
        })}
      </div>
    </div>
  );
}

export default HomePage;
