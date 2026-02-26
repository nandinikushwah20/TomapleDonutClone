import PageHeader from "../components/PageHeader";
import banner from "../assets/images/christmasgift.webp";

export default function Gift() {
  return (
    <>
      <PageHeader title="Gift" bg={banner} />
      <div className="page">
        Gift
      </div>
    </>
  );
}
