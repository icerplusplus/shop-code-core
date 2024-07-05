"use client";
import React from "react";
import { SectionType } from "@/utils/constant";
import { candal } from "@/utils/fonts";
import { trpc } from "@/utils/trpc";
import Image from "next/image";
import Link from "next/link";
import { VscArrowSmallRight, VscEye } from "react-icons/vsc";
import { CiShoppingCart } from "react-icons/ci";
import { currencyFormat } from "simple-currency-format";
import { Devider } from "./Devider";
import { Rating } from "./Rating";
import Skeletons from "../Skeletons";

interface SectionProps {
  section: string;
}

export function Section({ section }: Readonly<SectionProps>) {
  const [data, setData] = React.useState<SectionType | undefined>();

  const fetchSections = async () => {
    const res = await trpc.post["get-section-body-by-request"].useQuery({
      sectionName: section,
    });
    const postSection = await res;
    // if (postSection?.data) setData(postSection?.data as SectionType);
  };
  fetchSections();

  if (!data) return <Skeletons count={12} />;

  return (
    <div className="flex flex-col h-full space-y-5 mt-4">
      <div className="flex justify-between items-center w-full">
        <div className={`${candal.className} text-white text-2xl`}>
          {data.title}
        </div>
        <div className="flex justify-center items-center gap-1 h-full hover:underline">
          <Link href={data.viewMoreLink} className="text-white">
            Xem thêm
          </Link>
          <VscArrowSmallRight size={24} color="white" />
        </div>
      </div>
      <div className="rounded overflow-auto grid max-w-full m-0-auto gap-[1.5rem] grid-cols-post md:py-2">
        {/* flex md:flex-row md:justify-between flex-wrap */}
        {data.posts.map((post) => (
          <div
            className="group/item space-y-2 cursor-pointer shadow-post flex-grow bg-gradient-to-r from-[#1d3963] via-[#0b2a58] to-[#1b335b] rounded p-3"
            key={post.id}
          >
            <div className="relative">
              <Image
                src={post.image}
                alt={post.name}
                width={240}
                height={180}
                className="rounded w-full group-hover/item:resize-x object-cover aspect-post-img"
              />
              {/* <div className="absolute group/edit invisible group-hover/item:visible bottom-0 m-2"><Button title="See now"/></div> */}
            </div>

            <p className="text-white w-fit text-wrap line-clamp-3 md:max-w-[240px] cursor-pointer group-hover/item:underline">
              {post.name}
            </p>

            <Rating value={4} />
            <Devider />

            <div className="w-full flex justify-between">
              <span className="inline-flex items-center gap-2 text-white text-xs">
                <VscEye color="white" size={18} />
                {post.viewer}
              </span>
              <span className="inline-flex items-center gap-2 text-white text-xs">
                <CiShoppingCart color="white" size={18} />
                {currencyFormat(post.price, "vi-VN", "VND")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
