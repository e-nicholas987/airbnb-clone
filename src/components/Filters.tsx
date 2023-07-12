import { useEffect, useRef, useState } from "react";
import Container from "./Global/Container";
import FilterCard from "./Filters/FilterCard";
import ScrollButton from "./Buttons/ScrollButton";
import SettingsIcon from "assets/Icons/SettingsIcon";
import cn from "classnames";
import { filters } from "constants/filters";

const Filters = () => {
  const [activeFilterId, setActiveFilterId] = useState<null | number>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const [showScrollLeft, setShowScrollLeft] = useState<boolean>(false);
  const [showScrollRight, setShowScrollRight] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current) {
        setShowScrollLeft(filterRef.current.scrollLeft > 0);
        const { scrollLeft, scrollWidth, clientWidth } = filterRef.current;
        const endOfScroll = scrollLeft + clientWidth === scrollWidth;
        setShowScrollRight(!endOfScroll);
      }
    };

    if (filterRef.current) {
      filterRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (filterRef.current) {
        filterRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  });

  const handleScrollRight = (): void => {
    if (filterRef.current) {
      const width = filterRef.current.getBoundingClientRect().width;
      filterRef.current.scrollLeft += width;
    }
  };
  const handleScrollLeft = (): void => {
    if (filterRef.current) {
      const width = filterRef.current.getBoundingClientRect().width;
      filterRef.current.scrollLeft -= width;
    }
  };

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={cn("sticky z-10 top-20 md:top-[65px] bg-white", {
        "shadow-lg": isScrolled,
        "shadow-lg md:shadow-none": !isScrolled,
      })}
    >
      <Container>
        <div className=" flex items-center relative">
          <div
            className={cn(
              "hidden md:grid absolute left-0 h-full z-10  bg-white place-content-center transition all duration-300",
              {
                "opacity-0 ": !showScrollLeft,
                "opacity-100": showScrollLeft,
              }
            )}
          >
            <ScrollButton direction="left" onClick={handleScrollLeft} />
            <div className="absolute w-4 inset-y-0 rounded-full left-full  bg-[rgb(255,255,255,0.85)] z-10" />
          </div>
          <div
            ref={filterRef}
            style={{ scrollBehavior: "smooth" }}
            className="flex items-center gap-8 overflow-x-scroll scrollbar-hidden"
          >
            {filters.map((item) => (
              <FilterCard
                key={item.id}
                label={item.label}
                icon={item.icon}
                active={activeFilterId === item.id}
                onClick={() => {
                  setActiveFilterId(item.id);
                }}
              />
            ))}
          </div>
          <div
            className={cn("hidden md:block relative transition-all duration-300", {
              "opacity-0 ": !showScrollRight,
              "opacity-100": showScrollRight,
            })}
          >
            <ScrollButton direction="right" onClick={handleScrollRight} />
            <div className="absolute w-4 inset-y-[-8px] rounded-full right-full  bg-[rgb(255,255,255,0.85)] z-10 " />
          </div>
          <div className="hidden md:grid ml-6 text-primary text-xs h-12  rounded-lg border border-primary-border place-content-center">
            <span className="flex items-center gap-2 p-4">
              <SettingsIcon />
              <span className="font-medium">Filters</span>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Filters;
