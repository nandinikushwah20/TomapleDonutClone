import PageHeader from "../components/PageHeader";
import banner from "../assets/images/tower.webp";

export default function DonutTower() {
  return (
    <>
      <PageHeader title="Donut Tower" bg={banner} />
      <div className="page">
         content here
      </div>
    </>
  );
}
