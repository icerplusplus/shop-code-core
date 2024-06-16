"use client";
import "./index.css";
import { mockSection } from "@/utils/constant";
import { Section } from "@/components/shared";
import React from "react";

function SourceCodePage() {
  return (
    <div className="flex flex-col gap-5">
      {/* Recommended List Section  */}
      <div className="space-y-5">
        {mockSection.map((section) => (
          <Section
            key={section.title}
            posts={section.posts}
            title={section.title}
            viewMoreLink={section.viewMoreLink}
          />
        ))}
      </div>
    </div>
  );
}

// TODO: add AppRouter generic type
export default SourceCodePage;
