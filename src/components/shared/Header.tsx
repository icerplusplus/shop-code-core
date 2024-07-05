"use client";
import React from "react";
import { candal } from "@/utils/fonts";
import { usePathname } from "next/navigation";
import { VscChevronDown } from "react-icons/vsc";
import Link from "next/link";
import { Search } from "./Search";

interface FilterContentsGroup {
  title: string;
  contents: {
    title: string;
    link: string;
  }[];
}

interface FilterButtonProps extends FilterContentsGroup {
  onFilterBtnClick: (filterBtnName: string) => void;
  isActive: boolean;
}

const filterContentsGroup: FilterContentsGroup[] = [
  {
    title: "Website",
    contents: [
      {
        title: "Bán hàng - TMĐT",
        link: "/source-code/ban-hang-tmdt",
      },
      {
        title: "Giải trí",
        link: "/source-code/giai-tri",
      },
      {
        title: "Bất động sản",
        link: "/source-code/bat-dong-san",
      },
    ],
  },
  {
    title: "Software",
    contents: [
      {
        title: "Quản lý thư viện",
        link: "/source-code/quan-ly-thu-vien",
      },
      {
        title: "Quản lý bán hàng",
        link: "/source-code/quan-ly-ban-hang",
      },
      {
        title: "Quản lý nhân sự",
        link: "/source-code/quan-ly-nhan-su",
      },
      {
        title: "Thi trắc nghiệm",
        link: "/source-code/thi-trac-nghiem",
      },
    ],
  },
  {
    title: "App",
    contents: [
      {
        title: "Giải trí",
        link: "/source-code/giai-tri",
      },
      {
        title: "Tìm kiếm",
        link: "/source-code/tim-kiem",
      },
      {
        title: "Trắc nghiệm",
        link: "/source-code/trac-nghiem",
      },
      {
        title: "Nhắn tin",
        link: "/source-code/nhan-tin",
      },
    ],
  },
  {
    title: "Game",
    contents: [
      {
        title: "Trí tuệ",
        link: "/source-code/tri-tue",
      },
      {
        title: "Hành động",
        link: "/source-code/hanh-dong",
      },
      {
        title: "Cổ điển",
        link: "/source-code/co-dien",
      },
    ],
  },
];

const FilterButton: React.FC<FilterButtonProps> = ({
  title,
  contents,
  onFilterBtnClick,
  isActive,
}) => {
  return (
    <details onClick={() => onFilterBtnClick(title)}>
      <summary className="inline-flex items-center justify-center space-x-5 px-4 py-3 rounded-lg bg-gradient-to-br from-[#0A274E] to-[#06438F] cursor-pointer shadow-main">
        <p className={`${candal.className} text-white`}>{title}</p>
        <VscChevronDown size={24} color="white" />
      </summary>
      <ul
        onMouseLeave={() => onFilterBtnClick("")}
        className={`${
          !isActive
            ? "hidden"
            : "absolute flex flex-col py-4 mt-2 space-y-2 rounded-md text-white shadow-lg glassmorphism z-50"
        }`}
      >
        {contents.map((content, i) => (
          <Link
            key={content.link + i}
            href={content.link}
            className="px-4 py-2 cursor-pointer howver:shadow-xl font-semibold hover:bg-gradient-to-br hover:from-[#0D73FE] hover:to-[#845EFB] rounded-md mx-2"
          >
            {content.title}
          </Link>
        ))}
      </ul>
    </details>
  );
};

export const Header = () => {
  const [filterBtnActive, setFilterBtnActive] = React.useState<string>("");

  const onFilterBtnClick = (value: string) => {
    setFilterBtnActive(value);
  };

  const pathname = usePathname();
  const currentPath = pathname
    .slice(1)
    .replace(
      pathname.slice(1).charAt(0),
      pathname.slice(1).charAt(0).toUpperCase()
    );
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between ">
        <h2
          className={`${candal.className} ' text-white text-4xl font-semibold'`}
        >
          {!currentPath ? "Source Code" : currentPath}
        </h2>

        {/* Search component */}
        <div className="invisible md:visible">
          <Search />
        </div>
      </div>

      {/* Filter section */}
      <div className="flex flex-col md:items-center md:flex-row md:justify-start space-y-2 md:space-y-0 md:space-x-10">
        {filterContentsGroup.map((filterItem) => (
          <FilterButton
            key={filterItem.title}
            title={filterItem.title}
            contents={filterItem.contents}
            onFilterBtnClick={onFilterBtnClick}
            isActive={filterBtnActive === filterItem.title}
          />
        ))}
      </div>
    </div>
  );
};
