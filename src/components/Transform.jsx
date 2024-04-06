import React from "react";
import board_explain from "../assets/PNG/board_img.webp";
import ellipse from "../assets/SVG/ellipse.svg";

function Transform() {
  return (
    <>
      <div className=" position-relative pt_21 " id="service">
        <div className="container">
          <div className=" d-flex justify-content-center" data-aos="zoom-out">
            <img
              className=" w-100 br_24"
              src={board_explain}
              alt="transform_img"
            />
          </div>
        </div>
        <div className=" ellipse_pos_transform  position-absolute">
          <img src={ellipse} alt="ellipse" />
        </div>
      </div>
    </>
  );
}

export default Transform;
