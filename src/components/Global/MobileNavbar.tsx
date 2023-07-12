import { useEffect, useState } from "react";
import cn from "classnames";
import Container from "./Container";
import AirbnbIcon from "assets/Icons/AirbnbIcon";
import MessagesIcon from "assets/Icons/MessagesIcon";
import ProfileIcon from "assets/Icons/ProfileIcon";
import SearchIcon from "assets/Icons/SearchIcon";
import WishListIcon from "assets/Icons/WishListIcon";

interface NavLinks {
  label: string;
  icon: JSX.Element;
}
const navLinks: NavLinks[] = [
  { label: "Explore", icon: <SearchIcon /> },
  {
    label: "Wishlists",
    icon: <WishListIcon />,
  },
  {
    label: "Trips",
    icon: <AirbnbIcon />,
  },
  { label: "Inbox", icon: <MessagesIcon /> },
  { label: "Profile", icon: <ProfileIcon /> },
];

const MobileNavbar = () => {
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <nav
      className={cn(
        "md:hidden fixed flex items-center pb-[60px] h-[125px]  bg-white border  border-t-primary-border transition-all duration-300",
        {
          "bottom-[-140px]": isScrolled,
          "bottom-[-60px]": !isScrolled,
        }
      )}
    >
      <Container>
        <div className="flex justify-between text-[11px] max-w-[560px] mx-auto">
          {navLinks.map((navLink) => {
            return (
              <div
                key={navLink.label}
                className="flex flex-col items-center justify-between h-[50px] text-secondary"
              >
                {navLink.icon}
                <span> {navLink.label}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </nav>
  );
};

export default MobileNavbar;
