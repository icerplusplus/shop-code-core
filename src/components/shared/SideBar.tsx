"use client";
import React from "react";

import { Chelsea_Market } from "next/font/google";
import { AppIcon } from "../Icon";
import { IconType } from "react-icons/lib";
import { menus } from "../utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbBugOff } from "react-icons/tb";
import { Devider } from "./Devider";
import { VscMenu } from "react-icons/vsc";
import { Search } from "./Search";

const chelseaMarket = Chelsea_Market({
  weight: "400",
  subsets: ["latin"],
});

interface SideBarSelectorProps {
  icon: IconType;
  title: string;
  link: string;
}

const SideBarSelector: React.FC<SideBarSelectorProps> = ({
  icon,
  title,
  link,
}) => {
  const pathname = usePathname();
  const [defaultColor, setDefaultColor] = React.useState<string>("#3c5994");

  const splitPathname = pathname.split("/").filter((slug) => slug !== "");

  const onChangeColorIcon = (e: any) => {
    setDefaultColor("#fff");
  };

  const onResetColor = (e: any) => {
    setDefaultColor("#3c5994");
  };

  return (
    <Link
      href={link}
      onMouseLeave={onResetColor}
      onMouseOut={onChangeColorIcon}
      className={`group inline-flex w-full gap-4 p-4 text-[#3c5994] font-semibold cursor-pointer rounded-md hover:bg-gradient-to-r hover:from-[#0D73FE] hover:to-[#9c7bff] hover:backdrop-blur-sm hover:shadow-sm ${
        (pathname === link ||
          (splitPathname[0] === "source-code" && link === "/")) &&
        "neon-shadow text-white"
      }`}
    >
      <AppIcon
        Icon={icon}
        size={24}
        color={
          pathname === link ||
          (splitPathname[0] === "source-code" && link === "/")
            ? "#fff"
            : defaultColor
        }
      />
      <p className="group-hover:text-white w-full">{title}</p>
    </Link>
  );
};

export const SideBar = () => {
  React.useEffect(() => {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const menu = document.getElementById("menu");

    const handleMobileMenuBtnClick = () => {
      menu?.classList.toggle("transform");
      menu?.classList.toggle("translate-x-[300px]");
      mobileMenuBtn?.classList.toggle("transform")
      mobileMenuBtn?.classList.toggle("translate-x-[300px]")
    };

    mobileMenuBtn?.addEventListener("click", handleMobileMenuBtnClick);

    return () => {
      mobileMenuBtn?.removeEventListener("click", handleMobileMenuBtnClick);
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 bottom-0 z-50">
      <div className="flex flex-row justify-start h-full">
        <div
          id="menu"
          className="absolute top-0 left-[-300px] md:left-0 min-h-full h-full w-[300px] p-4 bg-gradient-to-tl from-[#1b335b] via-[#0b2a58] to-[#0e1b2e] shadow-post duration-500"
        >
          <div className="inline-flex items-center">
            <TbBugOff size={38} color="white" />
            <h3
              className={`${chelseaMarket.className} text-white text-3xl text-nowrap w-full p-4`}
            >
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-cyan-500 relative inline-block">
                <span className="relative text-white">Codepify</span>
              </span>
            </h3>
          </div>
          <div className="sticky top-0 pt-5 space-y-3">
            {menus.topContent.map((menu) => (
              <SideBarSelector
                key={menu.title}
                icon={menu.icon}
                title={menu.title}
                link={menu.link}
              />
            ))}
            <Devider />
            {menus.centerContent.map((menu) => (
              <SideBarSelector
                key={menu.title}
                icon={menu.icon}
                title={menu.title}
                link={menu.link}
              />
            ))}
            <Devider />
            {menus.bottomContent.map((menu) => (
              <SideBarSelector
                key={menu.title}
                icon={menu.icon}
                title={menu.title}
                link={menu.link}
              />
            ))}
          </div>
        </div>
        <button
          id="mobileMenuBtn"
          className="bg-gradient-to-br from-[#0A274E] to-[#06438F] h-fit mt-2 ml-2 p-2 shadow-post rounded duration-500"
        >
          <VscMenu size={24} color="white" />
        </button>
        {/* Search component */}
      <Search className="fixed md:hidden top-0 right-0 z-40"/>
      </div>
    </div>
  );
};
