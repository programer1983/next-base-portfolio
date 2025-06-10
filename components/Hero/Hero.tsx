import { useEffect } from "react";
import "./Hero.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    if (window.innerWidth >= 500) {
      AOS.init({ duration: 1000 });
    } else {
      const heroSection = document.querySelector(".hero");
      if (heroSection) {
        const elements = document.querySelectorAll("[data-aos]");
        elements.forEach((el) => {
          el.removeAttribute("data-aos");
          el.removeAttribute("data-aos-delay");
        });
      }
    }
  }, []);
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title" data-aos="fade-up">
            Мене звуть Дмитро
          </h1>
          <p className="hero__text" data-aos="fade-up" data-aos-delay="200">
            Розробляю сайти, додаткі, для компаній, агентств, приватних офісів.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
