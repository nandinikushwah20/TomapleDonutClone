import PageHeader from "../components/PageHeader";
import banner from "../assets/images/filled-donut2.jpg";

export default function FilledDonuts() {
  return (
    <>
      <PageHeader title="Filled Donuts" bg={banner} />
      <div className="page">
        Filled Donuts content here
      </div>
    </>
  );
}
