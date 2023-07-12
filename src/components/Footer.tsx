import { BiGlobe } from "react-icons/bi";
import { HiOutlineChevronUp } from "react-icons/hi";
import Container from "./Global/Container";
import PrivacyIcon from "assets/Icons/PrivacyIcon";

const Footer = () => {
  return (
    <footer className="hidden md:block fixed bottom-0 w-full bg-white border-t border-primary-border">
      <Container>
        <div className="pt-[13px] pb-[14px] flex justify-between items-center">
          <ul className="text-[13px] font-light flex flex-wrap">
            <li className="mr-2">
              {" "}
              <span>&copy; 2023 Airbnb, Inc </span>
            </li>
            <li>
              <span className="mx-2">&middot;</span>
              <span className=" hover:underline">Terms</span>
            </li>

            <li>
              <span className="mx-2">&middot;</span>
              <span className=" hover:underline">Sitemap</span>
            </li>
            <li>
              <span className="mx-2">&middot;</span>
              <span className="hover:underline">Privacy</span>
            </li>
            <li className="flex items-center">
              <span className="mx-2">&middot;</span>
              <span className="capitalize mr-2 hover:underline">
                Your privacy cookies
              </span>
              <PrivacyIcon />
            </li>
          </ul>
          <div className="flex items-center gap-4 font-medium text-[13px]">
            <div className="flex items-center">
              <BiGlobe size={22} className="mr-1" />
              <span className="whitespace-nowrap">English (US)</span>
            </div>
            <span>$&nbsp;&nbsp;USD</span>
            <div className="flex text-[13px]">
              <span className="whitespace-nowrap">Support & resources</span>
              <HiOutlineChevronUp size={20} className="ml-1 mt-[-2px]" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
