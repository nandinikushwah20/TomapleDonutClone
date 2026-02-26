import PageHeader from "../components/PageHeader";
import banner from "../assets/images/potatodonuticon.jpg";
import PotatoDonutSection from "../components/PotatoDonutSection";
// import banner from "../assets/images/potato-donuts-banner.jpg";

export default function Menu() {
  return (
    <>
      <PageHeader
        title="Potato Donuts"
        bg={banner}
      />
      <PotatoDonutSection />
      <div className="page">
        Content here...
      </div>
    </>
  );
}  