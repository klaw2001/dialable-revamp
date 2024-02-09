
import TopBar from "./Components/TopBar";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services/Services";
import BusinessListing from "./Components/BusinessListing";
<<<<<<< HEAD
import MarketPlace from "./Components/MarketPlace";
=======
import MarketPlace from "./Components/MarketPlace/MarketPlace";
>>>>>>> 62db206440a23c41e7148f4f915e10569d47415d
import JobPortal from "./Components/JobPortal";
import BoostBusiness from "./Components/BoostBusiness";
import Faq from "./Components/Faq";
import Blogs from "./Components/Blogs";
import ConnectUs from "./Components/ConnectUs";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="relative" >
      <TopBar/>
      <Navbar/>
      <Hero/>
      <Services/>
      <BusinessListing/>
      <MarketPlace/>
      <JobPortal/>
      <BoostBusiness/>
      <Faq/>
      <Blogs/>
      <ConnectUs/>
      <Footer/>
    </main>
  );
}
