import { SectionType } from "@/utils/constant";
import { candal } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { VscArrowSmallRight } from "react-icons/vsc";
import { Button } from "../Button";

export const Section: React.FC<SectionType> = ({
  posts,
  title,
  viewMoreLink,
}) => {
  return (
    <div className="flex flex-col h-full space-y-5">
      <div className="flex justify-between items-center w-full">
        <h3 className={`${candal.className} text-white text-2xl mt-4`}>
          {title}
        </h3>
        <div className="inline-flex items-center gap-1 hover:underline">
          <Link href={viewMoreLink} className="text-white">
            Xem thêm
          </Link>
          <VscArrowSmallRight size={24} color="white" />
        </div>
      </div>
      <div className="flex md:flex-row md:justify-between flex-wrap">
        {posts.map((post) => (
          <div className="group/item m-2 space-y-5 cursor-pointer" key={post.id}>
            <div className="relative">
            <Image src={post.image} alt={post.name} width={240} height={180} className="rounded md:max-w-[240px] md:max-h-[180px] group-hover/item:resize-x" />
            {/* <div className="absolute group/edit invisible group-hover/item:visible bottom-0 m-2"><Button title="See now"/></div> */}
            </div>
            
            <p className="text-white w-fit text-wrap line-clamp-3 md:max-w-[240px] cursor-pointer group-hover/item:underline">{post.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
