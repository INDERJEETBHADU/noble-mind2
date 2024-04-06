import React, { useEffect } from "react";
import Mynav from "./Mynav";
import ai_svg from "../assets/SVG/hero_ai_svg.svg";

function Herosec() {
  // const Preload = document.getElementById("preload");

  // useEffect(() => {
  //   setTimeout(() => {
  //     document.body.classList.remove("overflow-hidden");
  //     Preload.classList.add("d-none");
  //   }, "1000");
  // }, []);

  return (
    <>
      {/* <div
        id="preload"
        class="h-100 min-vh-100 w-100 d-flex align-items-center justify-content-center bg-black z-11 position-fixed start-0 top-0"
      >
        <div class="wrapper">
          <svg class="load">
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              Noble-Mind
            </text>
          </svg>
        </div>
      </div> */}
      <div className=" h-650 hero_bg_img d-flex flex-column " id="home">
        <div>
          <Mynav />
        </div>
        <div className=" container  d-flex flex-column justify-content-center  flex-grow-1">
          <div className=" d-flex align-items-center gap-1">
            <img src={ai_svg} alt="ai_hero" />
            <h5 className=" mb-0 font-exo2  sub_heading_common">
              AI With Noble Mind
            </h5>
          </div>
          <h2 className=" mb-0 font-outfit fw-light text-64 mt-2  lh-76 text-black">
            Inspiring Innovation,{" "}
            <span className=" d-md-block">Elevating Solutions – </span>
            <span className="  fw-semibold text-48 lh-57 text-black">
              Noble Mind"
            </span>
          </h2>
          <p className=" font-exo2  fw-normal text-16 lh-24 color-grey mb-0 mt-sm-3 mt-2">
            At Noble Mind is a forward-thinking AI specialised company dedicated
            to{" "}
            <span className=" d-md-block">
              reshaping the future of how we live, work, and learn. Our mission
              is to create
            </span>{" "}
            ground-breaking AI solutions for Healthcare, Education, and beyond,
            aligning{" "}
            <span className=" d-md-block">
              with Saudi Arabia’s Vision 2030.”
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Herosec;
