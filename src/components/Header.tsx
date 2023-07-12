import Logo from "./Header/Logo";
import Search from "./Header/Search";
import Nav from "./Header/Nav";
import Container from "./Global/Container";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-30 overflow-x-hidden">
      <Container>
        <div className="w-full flex items-center justify-between h-20">
          <Logo />
          <Search />
          <Nav />
        </div>
      </Container>
      <div className="h-[1px] bg-white md:bg-primary-border w-full opacity-60" />
    </header>
  );
};

export default Header;
