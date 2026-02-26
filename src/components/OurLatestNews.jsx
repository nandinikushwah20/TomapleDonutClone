import { useState } from "react";
import { Link } from "react-router-dom";
// import March26 from "../assets/images/March26.webp";

const newsData = [
  {
    id: 1,
    img: "src/assets/images/March26.webp",
    date: "March 26, 2022",
    title: "Yuk Cicipi Rajanya Donat Kentang saat Berbuka Puasa",
    link: "yuk-cicipi-rajanya-donat-kentang-saat-berbuka-puasa",
  },
  {
    id: 2,
    img: "src/assets/images/March25.webp",
    date: "March 25, 2022",
    title: "Sambut Ramadhan, Rajanya Donat Kentang Pas Untuk Berbuka Puasa",
    link: "sambut-ramadhan-rajanya-donat-kentang-pas-untuk-berbuka-puasa",
  },
  {
    id: 3,
    img: "src/assets/images/May8.webp",
    date: "May 8, 2021",
    title: "Kreasi Tomaple Donuts yang Mampu Bertahan di Masa Pandemi",
    link: "/news/kreasi-tomaple-donuts-pandemi",
  },
  {
    id: 4,
    img: "src/assets/images/May8.webp",
    date: "May 8, 2021",
    title: "Kreasi Tomaple Donuts yang Mampu Bertahan di Masa Pandemi",
    link: "/news/kreasi-tomaple-donuts-pandemi",
  },
  {
    id: 5,
    img: "src/assets/images/November10.webp",
    date: "November 10, 2019",
    title: "Inovasi Baru Tomaple untuk Pecinta Donat",
    link: "/news/inovasi-baru-tomaple",
  },
  {
    id: 6,
    img: "src/assets/images/September13.webp",
    date: "September 13, 2019",
    title: "Tomaple Donuts Hadir di Berbagai Kota",
    link: "/news/tomaple-hadir-di-berbagai-kota",
  },
];


export default function OurLatestNews() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const totalDots = Math.ceil(newsData.length / visible);

  return (
    <section className="newsSection">
      <h2>Our Latest News</h2>
      <p className="newsSub">
        Follow our latest news and thoughts. Let’s share and enjoy the
        #PinkBoxHappiness for everyone.
      </p>

      <div className="newsSliderWindow">
        <div
          className="newsSliderTrack"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {Array.from({ length: totalDots }).map((_, slideIndex) => (
            <div className="newsSlide" key={slideIndex}>
              {newsData
                .slice(slideIndex * visible, slideIndex * visible + visible)
                .map((item) => (
                  <div className="newsCard" key={item.id}>
                    <div className="newsImg">
                      <img src={item.img} alt={item.title} />
                      <div className="imgOverlay"></div>
                      <span className="newsDate">
                        <i className="fa-regular fa-calendar"></i>
                          {item.date}
                        </span>
                      </div>

                    <h3>{item.title}</h3>

                    <Link to={item.link} className="readMore">
                      Read More
                    </Link>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="newsDots">
        {Array.from({ length: totalDots }).map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
