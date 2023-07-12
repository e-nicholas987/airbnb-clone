import { BiGlobe } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
  return (
    <nav className="hidden md:flex flex-1 lg:flex-none justify-end items-center gap-6 ">
      <div className="text-sm whitespace-nowrap font-medium text-primary">Airbnb your home</div>
      <BiGlobe size={20} />
      <button
        type="button"
        className="
        flex 
        items-center 
        gap-3 
        p-[5px] 
        pl-3 
        rounded-full 
        border 
        border-primary-border 
        hover:shadow-primary-hover-shadow
        transition-all 
        duration-300 
        "
      >
        <div>
          <FiMenu />
        </div>
        <span className="grid place-content-center bg-black text-white text-[10px] h-[30px] w-[30px] p-[3px] rounded-full">
          E
        </span>
      </button>
    </nav>
  );
};

export default Nav;
