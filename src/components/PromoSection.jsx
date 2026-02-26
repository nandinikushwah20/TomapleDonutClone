import { Link } from "react-router-dom";

import promo1 from "../assets/images/promo1.webp";
import promo2 from "../assets/images/promo2.jpg";
import promo3 from "../assets/images/promo3.webp";
import promo4 from "../assets/images/promo4.webp";

export default function PromoSection() {
  return (
    <section className="promoSection">
      <h2>
        <span>Special Offers</span> of the Month
      </h2>

      <p className="promoText">
        We hope to share #PinkBoxHappiness with everyone.
      </p>
      <p className="promoSub">
        Find out this month’s special promotions!
      </p>

      <div className="promoGrid">
        <a
          href="https://gofood.co.id/jakarta/restaurant/tomaple-potato-donuts-radio-dalam-0feaa2d9-67a3-4be2-a53e-bc7472f72020"
          target="_blank"
          rel="noopener noreferrer"
          className="promoCard"
        >
          <img src={promo1} alt="GoFood Promo" />
        </a>

        <a
          href="https://shopee.co.id/buyer/login?fu_tracking_id=1531cb24c4f-3eaa-4047-ae71-fcac708f3891&is_from_fu=1770121957615&next=https%3A%2F%2Fshopee.co.id%2Fproduct%2F3188573%2F2833360234"
          target="_blank"
          rel="noopener noreferrer"
          className="promoCard"
        >
          <img src={promo2} alt="Shopee Promo" />
        </a>

        <a
          href="https://qpon.id/platform/merchant?channel_id=1&linkType=app&poiId=867155755176034466&shareType=WHATS_APP&source_tag=Share"
          target="_blank"
          rel="noopener noreferrer"
          className="promoCard"
        >
          <img src={promo3} alt="Qpon Promo" />
        </a>


        <a
          href="https://food.grab.com/ID/en/restaurant/tomaple-bintaro-xchange-mall-2-delivery/6-C4BKJ2M2C7B3LJ?destination=DINEIN&nameSlug=tomaple-bintaro-xchange-dinein&id=6-C4BKJ2M2C7B3LJ"
          target="_blank"
          rel="noopener noreferrer"
          className="promoCard"
        >
          <img src={promo4} alt="GrabFood Promo" />
        </a>
      </div>
    </section>
  );
}
