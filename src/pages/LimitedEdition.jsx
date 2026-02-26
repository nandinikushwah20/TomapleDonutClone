import PageHeader from "../components/PageHeader";
import banner from "../assets/images/pink clr bg.jpg";

export default function LimitedEdition() {
  return (
    <>
      <PageHeader title="Eid al-Fitr 2024" bg={banner} />
      <div className="page">
        Limited Edition donuts here
      </div>
    </>
  );
}
