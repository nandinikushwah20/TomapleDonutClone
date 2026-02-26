// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// import potato from "../assets/images/potatodonuticon.jpg";
// import filled from "../assets/images/filled-donut2.jpg";
// import bar from "../assets/images/bar-donuts.jpg";
// import limited from "../assets/images/pink clr bg.jpg";
// import tower from "../assets/images/tower.webp";
// import gift from "../assets/images/christmasgift.webp";
// import beverages from "../assets/images/beverages.webp";


// const products = [
//   { img: potato, title: "Potato Donuts", link: "/donuts/potato", btn: "View Donuts" },
//   { img: filled, title: "Filled Donuts", link: "/donuts/filled", btn: "View Donuts" },
//   { img: bar, title: "Bar Donuts", link: "/donuts/bar", btn: "View Donuts" },
//   { img: limited, title: "Limited Edition", link: "/donuts/limited", btn: "View Donuts" },
//   { img: tower, title: "Donut Tower", link: "/donuts/tower", btn: "View Donuts" },
//   { img: gift, title: "Gift", link: "/gift", btn: "View Gift" },
//   { img: beverages, title: "Beverages", link: "/beverages", btn: "View Beverages" },
// ];

// export default function OurProductSlider() {
//   let settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//   };
//   const [index, setIndex] = useState(0);
//   const visible = 4;

//   const next = () => {
//   if (index >= products.length - visible) {
//     setIndex(0); // wapas start
//   } else {
//     setIndex(index + 1);
//   }
// };

// const prev = () => {
//   if (index === 0) {
//     setIndex(products.length - visible); // last set
//   } else {
//     setIndex(index - 1);
//   }
// };

//   return (
//     <section className="ourProducts">
//       <h2>Our Products</h2>

//       <div className="sliderWrap">
//         <Slider {...settings}>
//         <button className="arrow left" onClick={prev}>‹</button>

//         <div className="sliderWindow">
//           <div
//             className="sliderTrack"
//             style={{ transform: `translateX(-${index * 25}%)` }}
//           >
//             {products.map((p, i) => (
//               <Link to={p.link} className="productCard" key={i}>
//                 <img src={p.img} alt={p.title} />
//                 <h3>{p.title}</h3>

//                 <div className="viewBtn">
//                   <span>{p.btn}</span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>

//         <button className="arrow right" onClick={next}>›</button>
//         </Slider>
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import potato from "../assets/images/potatodonuticon.jpg";
import filled from "../assets/images/filled-donut2.jpg";
import bar from "../assets/images/bar-donuts.jpg";
import limited from "../assets/images/pink clr bg.jpg";
import tower from "../assets/images/tower.webp";
import gift from "../assets/images/christmasgift.webp";
import beverages from "../assets/images/beverages.webp";

const products = [
  { img: potato, title: "Potato Donuts", link: "/donuts/potato", btn: "View Donuts" },
  { img: filled, title: "Filled Donuts", link: "/donuts/filled", btn: "View Donuts" },
  { img: bar, title: "Bar Donuts", link: "/donuts/bar", btn: "View Donuts" },
  { img: limited, title: "Limited Edition", link: "/donuts/limited", btn: "View Donuts" },
  { img: tower, title: "Donut Tower", link: "/donuts/tower", btn: "View Donuts" },
  { img: gift, title: "Gift", link: "/gift", btn: "View Gift" },
  { img: beverages, title: "Beverages", link: "/beverages", btn: "View Beverages" },
];

export default function OurProductSlider() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="ourProducts">
      <h2>Our Products</h2>

      <div className="sliderWrap">
        <Slider {...settings}>
          {products.map((p, i) => (
            <Link to={p.link} className="productCard" key={i}>
              <img src={p.img} alt={p.title} />
              <h3>{p.title}</h3>
              <div className="viewBtn">{p.btn}</div>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
}
