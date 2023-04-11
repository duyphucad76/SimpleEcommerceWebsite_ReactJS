import React, { useState } from "react";
import "./Slider.scss";
import dataSlider from "./dataSlider";
import Button from "../Button";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <>
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img src={`/public/sliders/Slider-${index + 1}.webp`} />
            </div>
            <div
              className={`${
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              } hero-slider`}
            >
              <div
                className={`${
                  slideIndex === 2 ? "content-center" : ""
                } container-wrapper`}
              >
                <p className="slider-title__small">{obj.titleSmall}</p>
                <p
                  className={`${
                    slideIndex === 1 || slideIndex === 3
                      ? "lenght-text"
                      : "lenght-900"
                  } slider-title__bold`}
                >
                  {obj.titleBigBold}
                </p>
                <p className="slider-title__light">{obj.titleBiglight}</p>
                <Button primary to={obj.path}>
                  {obj.titleButton}
                </Button>
              </div>
            </div>
          </>
        );
      })}

      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
