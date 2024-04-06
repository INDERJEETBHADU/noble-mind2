import React from "react";
import pionner from "../assets/PNG/pioner_vision.webp";
import ai_svg from "../assets/SVG/hero_ai_svg.svg";
import Commonbtn from "./Commonbtn";
import ellipse from "../assets/SVG/ellipse.svg";

function Pionner() {
  return (
    <>
      <div className=" position-relative" id="about">
        <div className=" container py_47">
          <div className="row">
            <div className="col-lg-6 col-12 d-flex justify-content-start justify-content-lg-center align-items-center ">
              <div className="" data-aos="zoom-in">
                <img
                  className=" max_w_544 border_t_r_50 w-100"
                  src={pionner}
                  alt="pionner_vision"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 d-flex justify-content-lg-end justify-content-start  ">
              <div className=" mt-3 max_w_521   ">
                <div className=" d-flex align-items-center gap-1">
                  <img src={ai_svg} alt="ai_hero" />
                  <h5 className=" mb-0 font-exo2  sub_heading_common">
                    About Us
                  </h5>
                </div>

                <h3 className="  mb-0 font-outfit  fw-light text-48 mt-2  lh-57 text-black">
                  <span className="">Pioneering Vision &</span> Mission-
                  <span className="   fw-semibold text-48 lh-57 text-black">
                    Driven Sectoral Innovation
                  </span>
                </h3>
                <p className=" font-exo2  fw-normal text-16 lh-24 max_w_pioner_para color-grey mb-0 mt-sm-3 mt-2">
                  Imagine a future in Saudi Arabia influenced by the potential
                  of Al, with Noble Mind at the forefront of this
                  transformation. Healthcare stands to gain with the promise of
                  enhanced data precision. In education, there's the potential
                  for individualized learning experiences. Finance could witness
                  seamless transactions, and entertainment may revel in
                  customized experiences. Through Al's promise, transportation
                  could innovate and cities might adapt smarter infrastructures.
                  In every domain, the vision of Noble Mind hints at a brighter,
                  more efficient nation.
                </p>
                <div className=" mt_22">
                  <Commonbtn text="Read More" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" position-absolute ellipse_pos_about">
          <img src={ellipse} alt="ellipse" />
        </div>
        <div className=" position-absolute ellipse_pos_about2">
          <img src={ellipse} alt="ellipse" />
        </div>
      </div>
    </>
  );
}

export default Pionner;
