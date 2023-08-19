import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import { Image } from "react-bootstrap";
import "./Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((slide) => (slide === data.length - 1 ? 0 : slide + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [data.length]);

  const nextSlide = () => {
    setSlide((slide) => (slide === data.length - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? data.length - 1 : slide - 1));
  };

  return (
    <div className="carousel">
      <ArrowBackIosNew onClick={prevSlide} className="arrow arrow-left" />
      <TransitionGroup className="slider">
        {data.map((item, idx) => (
          <CSSTransition
            key={idx}
            timeout={300}
            classNames="slide"
            exit={false}
          >
            <Image
              src={item.src}
              alt={item.alt}
              className={slide === idx ? "slide" : "slide-hidden"}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <ArrowForwardIosIcon onClick={nextSlide} className="arrow arrow-right" />
    </div>
  );
};

export default Carousel;
