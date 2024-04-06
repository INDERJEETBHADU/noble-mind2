import React from "react";
import ellipse from "../assets/SVG/ellipse.svg";

function Newslatter() {
  return (
    <>
      <div className=" bg_gradient position-relative" id="blog">
        <div className="container py_47 pb-0">
          <div
            data-aos="zoom-in"
            className="bg_img_news d-flex justify-content-center align-items-center"
          >
            <div className="">
              <h3 className=" mb-0 font-outfit fw-light text-48 lh-57 color-litewhite text-center">
                Subscribe to our{" "}
                <span className="  fw-semibold">Newsletter!</span>
              </h3>
              <p className=" font-exo2 mb-0 text-16 mt-2 fw-normal lh-24 color-litewhite text-center">
                Be the first to get exclusive offers and the latest news.
              </p>
              <div className=" d-flex justify-content-center mx-2 mx-sm-0 ">
                <div className=" email_box w-100  d-flex flex-column flex-sm-row align-items-center  justify-content-sm-between mt_23">
                  <input
                    type="email"
                    className=" email_box_small text-center text-sm-start   text-white font-outfit fw-semibold text-16 lh-24 "
                    placeholder="Enter your email"
                  />
                  <button className=" mb-0 mt-3 mt-sm-0 font-outfit fw-semibold text-16 lh-24  color-litewhite bg-transparent px-4 subscribe_btn">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" ellipse_pos_newsletter   position-absolute">
          <img src={ellipse} alt="ellipse" />
        </div>
      </div>
    </>
  );
}

export default Newslatter;
