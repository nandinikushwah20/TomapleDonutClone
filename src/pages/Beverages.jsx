import PageHeader from "../components/PageHeader";
import banner from "../assets/images/beverages.webp";

export default function Beverages() {
  return (
    <>
      <PageHeader title="Tomaple's Special" bg={banner} />
      <div className="page">
        Beverages
      </div>
    </>
  );
}
