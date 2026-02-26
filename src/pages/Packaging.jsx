import PageHeader from "../components/PageHeader";
import banner from "../assets/images/packaging-donuts.jpg";

export default function Packaging() {
  return (
    <>
      <PageHeader title="Packagings" bg={banner} />
      <div className="page">
        Packaging content here
      </div>
    </>
  );
}
