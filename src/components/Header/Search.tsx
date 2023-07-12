import SettingsIcon from "assets/Icons/SettingsIcon";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div
      style={{ flex: "0 1 auto" }}
      className="
        w-full
        md:w-auto
        rounded-full 
        p-2 
        md:mx-6
        flex 
        gap-4 
        border 
        border-primary-border 
        shadow-nav-filter-shadow 
        hover:shadow-primary-hover-shadow
        transition-all 
        duration-300"
    >
      <div className="w-full flex items-center md:w-auto">
        <div className="w-full flex items-center">
          <IoSearch className="text-black md:hidden ml-2 mr-3" size={18} />
          <div className="grid grid-cols-2 md:flex align-bottom items-center">
            <div className="col-span-2 flex items-center">
              <button className="truncate md:px-4 text-primary text-[13px] md:text-sm font-medium">
                Anywhere
              </button>
              <Divider />
            </div>
            <div className=" flex items-center">
              <button className="truncate md:px-4 text-secondary md:text-primary text-xs md:text-sm font-light md:font-medium">
                Any week
              </button>
              <Divider />
              <span className="ml-2 mr-1  md:hidden">&middot;</span>
            </div>
            <button className="truncate md:px-4 text-secondary text-xs md:text-sm font-light">
              Add guests
            </button>
          </div>
          <button className="bg-pink hidden md:block rounded-full p-2 ">
            <IoSearch className="text-white" size={16} />
          </button>
          <button className="bg-white md:hidden rounded-full border border-primary-border p-2 ml-auto">
            <SettingsIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

const Divider = () => (
  <span className="hidden md:block w-[1px] h-6 bg-secondary opacity-30"></span>
);

export default Search;
