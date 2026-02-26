import donutImg from "../assets/images/potato1.jpg";

export default function PotatoDonutSection() {
  return (
    <section className="donutSection">
      <div className="donutGrid">

        {/* Left Image */}
        <div className="donutImg">
          <img src={donutImg} alt="Potato Donuts" />
        </div>

        {/* Right Content */}
        <div className="donutContent">
          <h2>Potato Donuts</h2>
          <p>
            Our potato donuts, reimagined. Topped with classic and modern
            flavors that elevate the traditional homemade favorite.
          </p>
        </div>

      </div>
    </section>
  );
}
