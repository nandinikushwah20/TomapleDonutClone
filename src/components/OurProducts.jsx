import { Link } from "react-router-dom";

import potato from "../assets/images/potatodonuticon.jpg";
import filled from "../assets/images/filled-donut2.jpg";
import bar from "../assets/images/bar-donuts.jpg";
import limited from "../assets/images/pink clr bg.jpg";
import tower from "../assets/images/tower.webp";
import gift from "../assets/images/christmasgift.webp";
import beverages from "../assets/images/beverages.webp";

export default function OurProducts() {
  return (
    <section className="ourProducts">
      <h2>Our Products</h2>

      <div className="productGrid">
        <ProductCard
          img={potato}
          title="Potato Donuts"
          link="/donuts/potato"
        />
        <ProductCard
          img={filled}
          title="Filled Donuts"
          link="/donuts/filled"
        />
        <ProductCard
          img={bar}
          title="Bar Donuts"
          link="/donuts/bar"
        />
        <ProductCard
          img={limited}
          title="Limited Edition"
          link="/donuts/limited"
        />

        <ProductCard
          img={tower}
          title="Donut Tower"
          link="/donuts/tower"
        />

        <ProductCard
          img={gift}
          title="Gift"
          link="/gift"
        />

        <ProductCard
          img={beverages}
          title="Beverages"
          link="/beverages"
        />
      </div>
    </section>
  );
}

function ProductCard({ img, title, link }) {
  return (
    <Link to={link} className="productCard">
      <img src={img} alt={title} />
      <h3>{title}</h3>

      <div className="viewBtn">
        <span>View Donuts</span>
      </div>
    </Link>
  );
}
