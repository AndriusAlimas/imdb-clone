import React from "react";
import Slider from "react-slick";
import "./FeaturedSlider.css";

const FeaturedSlider = ({ content }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      {content.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.title} />
          <div className="slider-caption">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FeaturedSlider;
