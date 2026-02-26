import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      {/* TOP PINK STRIPS */}
      <div className="footerTopStrips">
        <span></span>
        <span></span>
      </div>

      <div className="footerContent">
        {/* LOGO */}
        <div className="footerCol">
          <Link to="/" className="footerLogo">
            <img src="/src/assets/images/no-bg-1.webp" alt="Tomaple Logo" />
          </Link>
          <p className="pinkHash">#PinkBoxHappiness</p>
        </div>

        {/* LINKS */}
        <div className="footerCol">
          <h4 className="footerTitle">Links</h4>
          <span className="footerLine"></span>

          <Link to="/about">About Us</Link>
          <Link to="/donuts">Donuts</Link>
          <Link to="/beverages">Beverages</Link>
          <Link to="/promo">Promo</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/stores">Stores</Link>
          <Link to="/merchandise">Merchandise</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* OFFICIAL INFO */}
        <div className="footerCol">
          <h4 className="footerTitle">Official Info :</h4>
          <span className="footerLine"></span>
          
          <div className="officialinfo">
          <p>
            <a href="https://www.google.com/maps/place/Tomaple+Gourmet+Potato+Donuts+-+Radio+Dalam/@-6.2605847,106.7890344,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f1ca4e55548f:0xdbe19f05acc1c242!8m2!3d-6.2605847!4d106.7890344?authuser=0&hl=id">
              <i className="fa-solid fa-location-dot"></i>
              Tomaple Gourmet Potato Donuts HQ
            </a>
          </p>

          <p>
            <a href="mailto:hello@tomapledonuts.com">
              <i className="fa-solid fa-envelope"></i>
              hello@tomapledonuts.com
            </a>
          </p>

          <p>
            <a href="tel:081119237005">
              <i className="fa-solid fa-phone"></i>
              0811-1923-7005
            </a>
          </p>
          </div>
        </div>
    

        {/* SOCIAL MEDIA */}
        <div className="footerCol">
          <h4 className="footerTitle">Social Media</h4>
          <span className="footerLine"></span>

          <div className="socialIcons">
            <a href="https://www.instagram.com/tomapledonuts/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://tiktok.com" target="_blank">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a href="https://linkedin.com" target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://youtu.be/i9yqsZ7Q8nA" target="_blank">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* WAVY BOTTOM */}
      <div className="footerBottom">
        © 2026 Tomaple Donuts. All rights reserved.
      </div>
    </footer>
  );
}
