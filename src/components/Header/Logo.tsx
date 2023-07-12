import Airbnb from "assets/images/airbnb-logo.png";

const Logo = () => {
  return (
    <div className="hidden md:flex shrink-0 gap-1 items-center lg:min-w-[140px]">
      <img src={Airbnb} alt="logo" className="h-[38px] w-10 pink" />
      <h2 className="hidden xl:block font-bold text-2xl text-pink">
        airbnb
      </h2>
    </div>
  );
};

export default Logo;
