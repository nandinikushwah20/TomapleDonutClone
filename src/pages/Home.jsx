import Hero from "../components/Hero";
// import DonutCategorySection from "../components/DonutCategorySection";
import HomeAboutSection from "../components/HomeAboutSection";
import Instagram from "../components/Instagram";
import OurProducts from "../components/OurProducts";
import PromoSection from "../components/PromoSection";
import Youtube from "../components/Youtube";
import OurLatestNews from "../components/OurLatestNews";
import OnlineDelivery from "../components/OnlineDelivery";
import Stores from "./Stores";


export default function Home() {
  return (
    <>
      <Hero />
      <HomeAboutSection />
      <OurProducts/>
      <Youtube/>
      <PromoSection/>
      <Instagram/>
      <OurLatestNews/>
      <OnlineDelivery/>
      <Stores/>
    </>
  );
}
