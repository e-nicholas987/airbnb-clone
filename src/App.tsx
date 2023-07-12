import Header from "components/Header";
import Listings from "components/Listings";
import Footer from "components/Footer";
import Filters from "components/Filters";
import MobileNavbar from "components/Global/MobileNavbar";

const App = () => {
  return (
    <section className="font-inter bg-[#fff] relative overflow-x-clip">
      <Header />
      <Filters />
      <Listings />
      <Footer />
      <MobileNavbar />
    </section>
  );
};

export default App;
