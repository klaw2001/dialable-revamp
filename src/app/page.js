import Image from "next/image";
import styles from "./page.module.css";
import TopBar from "./Components/TopBar";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services/Services";
import BusinessListing from "./Components/BusinessListing";
import MarketPlace from "./Components/MarketPlace";
import JobPortal from "./Components/JobPortal";
import BoostBusiness from "./Components/BoostBusiness";

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
    </main>
  );
}
