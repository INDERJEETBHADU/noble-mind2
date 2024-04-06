import React from "react";
import ai_svg from "../assets/SVG/hero_ai_svg.svg";
import ellipse from "../assets/SVG/ellipse.svg";

import Slider from "react-slick";
import { driving } from "../common/Helper";

function Innovation() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: false,
    arrows: false,
    slidesToScroll: 1,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" position-relative" id="choose">
        <div className="container">
          <div className=" d-flex align-items-center justify-content-center gap-1">
            <img src={ai_svg} alt="ai_hero" />
            <h5 className=" mb-0 font-exo2  sub_heading_common">
              Why Choose Us
            </h5>
          </div>
          <h2 className=" mb-0 font-outfit  text-center fw-light text-48 mt-2  lh-57 text-black">
            Driving Innovation &
            <span className="  d-block  fw-semibold text-48 lh-57 text-black">
              Transforming Industries
            </span>
          </h2>

          <Slider {...settings} className=" py-5 my-1">
            {driving.map((data, index) => (
              <>
                <div className=" d-flex justify-content-center">
                  <div key={index} className="centric_box h-100 w-100">
                    <div className="number_circle d-flex justify-content-center align-items-center">
                      <img src={data.img} />
                    </div>
                    <div className="pt-1">
                      <h3 className=" font-outfit mb-0 fw-normal text-20 lh-25  color-liteblack mt-2">
                        {data.heading}
                      </h3>
                    </div>
                    <p className="  font-exo2 fw-normal  text-16 lh-24  color-grey mt-1  mb-0">
                      {data.para}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
        <div className=" ellipse_pos_innovation  position-absolute">
          <img src={ellipse} alt="ellipse" />
        </div>
      </div>
    </>
  );
}

export default Innovation;
