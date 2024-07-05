import React from "react";
import { CiSearch } from "react-icons/ci";
import IconButton from "../IconButton";
import { VscClose } from "react-icons/vsc";

interface SearchProps {
  className?: string;
}

export const Search: React.FC<SearchProps> = ({ className }) => {
    const [isHidden, setIsHidden] = React.useState(true)

  React.useEffect(() => {
    const iconBtn = document.getElementById("iconBtn");
    const searchInput = document.getElementById("searchInput");

    const handleClick = () => {
      iconBtn?.classList.toggle("transform");
    //   iconBtn?.classList.toggle("w-[80px]");
      searchInput?.classList.toggle("transform");
      searchInput?.classList.remove("hidden");
      setIsHidden(false)
    };

    

    iconBtn?.addEventListener("click", handleClick);

    return () => {
      iconBtn?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className={className}>
      <div className="md:hidden" id="iconBtn">
        <IconButton>
          <div className="flex justify-between items-center gap-2">
            <CiSearch size={24} color="white" />
            <input
              id="searchInput"
              className={`${isHidden && 'hidden'} flex-1 w-full outline-none bg-transparent text-white leading-5`}
              type="text"
              placeholder="Search..."
            />
            <div id="closeBtn" className={`${isHidden && 'hidden'}`} onClick={() => setIsHidden(true)}>
              <VscClose size={24} color="white" />
            </div>
          </div>
        </IconButton>
      </div>
      <div className="hidden md:inline-flex justify-center items-center gap-2 bg-[#17416A] p-3 rounded-xl">
        <CiSearch size={24} color="white" />
        <input
          className="hidden md:block outline-none bg-transparent text-white leading-5"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};
