import PageHeader from "../components/PageHeader";
import banner from "../assets/images/bar-donuts.jpg";

export default function BarDonuts() {
  return (
    <>
      <PageHeader title="Bar Donuts" bg={banner} />
      <div className="page">
        Bar Donuts content here
      </div>
    </>
  );
}
