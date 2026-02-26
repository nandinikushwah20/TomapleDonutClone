import PageHeader from "../components/PageHeader";
import banner from "../assets/images/potatodonuticon.jpg";

export default function PotatoDonuts() {
  return (
    <>
      <PageHeader title="Potato Donuts" bg={banner} />
      <div className="page">
        donuts here
      </div>
    </>
  );
}
