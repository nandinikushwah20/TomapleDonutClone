import heroImg from "../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="hero">
      <img className="heroFullImg" src={heroImg} alt="Hero Banner" />
    </section>
  );
}
