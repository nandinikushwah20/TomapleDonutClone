import aboutImg from "../assets/images/MXB06606.webp";
import iconWhy from "../assets/images/TOMAPLE-POTATO-DONUTS-BIRTHDAY-CAKE.webp";
// "C:\Users\ASUS\Documents\GenkaiX\tomapleDonutsClone\src\assets\images\TOMAPLE-POTATO-DONUTS-BIRTHDAY-CAKE.webp"
import iconTop from "../assets/images/TOMAPLE-POTATO-DONUTS-FUDGY-ROUNDS.webp";
// "C:\Users\ASUS\Documents\GenkaiX\tomapleDonutsClone\src\assets\images\TOMAPLE-POTATO-DONUTS-FUDGY-ROUNDS.webp"

export default function HomeAboutSection() {
  return (
    <section className="homeAbout">
      <div className="homeAboutGrid">

        {/* LEFT IMAGE */}
        <div className="homeAboutImg">
          <img src={aboutImg} alt="Tomaple Donuts" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="homeAboutContent">
          <p className="aboutTag">~ About us ~</p>
          <h2>Our Origins</h2>

          <p>
            Founded in 2019, Tomaple Gourmet Potato Donuts is a local brand
            that proudly serves one of Indonesia’s tastes of memories,
            “Potato Donuts”.
          </p>

          <p>
            Our potato donuts are made with a higher percentage of premium
            potatoes, which makes them softer and fluffier, then we combine
            them with modern flavors and premium ingredients to elevate
            the traditional potato donut.
          </p>

          <div className="homeAboutIcons">
            <div className="iconBox">
              <img src={iconWhy} alt="Why Tomaple" />
              <div>
                <h4>Why Tomaple</h4>
                <p>
                  Tomaple Donuts are made with a higher percentage of
                  premium potatoes
                </p>
              </div>
            </div>

            <div className="iconBox">
              <img src={iconTop} alt="The Toppings" />
              <div>
                <h4>The Toppings</h4>
                <p>
                  Toppings are the gourmet element of Tomaple Donuts
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
