import { useEffect, useState } from "react";
import "./Hero.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    setIsWide(width >= 500);

    if (width >= 500) {
      AOS.init({ duration: 1000 });
    }
  }, []);
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__content">
          <h1
            className={`hero__title ${isWide ? { "data-aos": "fade-up" } : {}}`}
          >
            Мене звати Дмитро
          </h1>
          <p
            className={`hero__text ${
              isWide ? { "data-aos": "fade-up", "data-aos-delay": "200" } : {}
            }`}
          >
            Розробляю сайти, додатки, для компаній, агентств, приватних офісів.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
