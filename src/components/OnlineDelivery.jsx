export default function OnlineDelivery() {
  return (
    <section className="onlineDelivery">
      <div className="onlineOverlay">
      <h2 className="onlineTitle">Online Delivery</h2>

      <div className="deliveryLogos">
        <a href="https://gofood.co.id/jakarta/restaurant/tomaple-potato-donuts-radio-dalam-0feaa2d9-67a3-4be2-a53e-bc7472f72020" 
           target="_blank" className="logoItem">
          <img src="src/assets/images/GoFood3.webp" alt="GoFood" />
        </a>

        <a href="https://food.grab.com/id/id/restaurant/tomaple-gandaria-utara-delivery/6-CY2VGUXXV24ZTJ" 
           target="_blank" className="logoItem">
          <img src="src/assets/images/GrabFood2.webp" alt="GrabFood" />
        </a>

        <a href="https://shopee.co.id/buyer/login?fu_tracking_id=874c5c38d60-c5fd-4ff5-84c6-1df27d060f16&next=https%3A%2F%2Fshopee.co.id%2Ftomaple" 
           target="_blank" className="logoItem">
          <img src="src/assets/images/Shopee1.webp" alt="ShopeeFood" />
        </a>

        <a href="https://www.tokopedia.com/tomapledonuts" target="_blank" 
           className="logoItem">
          <img src="src/assets/images/Tokopedia1.webp" alt="Tokopedia" />
        </a>
      </div>

      <div className="onlineSearch">
      <i className="fa-solid fa-magnifying-glass"></i>
      <span>Tomaple Donuts</span>
      </div>

      </div>    
    </section>
  );
}
