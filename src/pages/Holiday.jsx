import PageHeader from "../components/PageHeader";
import banner from "../assets/images/holiday-donuts.jpg";

export default function Holiday() {
  return (
    <>
      <PageHeader title="Holiday Edition" bg={banner} />
      <div className="page">
        Potato Donuts content here
      </div>
    </>
  );
}
