import React, { useState } from "react";
import logo_nav from "../assets/SVG/logo.svg";

function Mynav() {
  const [show, setfirst] = useState(false);
  if (show === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="">
        <div className=" container ">
          <nav className=" d-flex align-items-center justify-content-between nav_box">
            <img className=" cursor_pointer" src={logo_nav} alt="nav_logo" />
            <div className=" d-flex align-items-center gap-3">
              <ul
                className={` ${
                  show ? "end-0" : "right_100"
                } mb-0 font-exo2  fw-normal text-16 mobile-view   lh-24 d-flex align-items-center gap-4 `}
              >
                <li>
                  <a
                    onClick={() => {
                      setfirst(!show);
                    }}
                    className="  head_hover"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setfirst(!show);
                    }}
                    className="  head_hover"
                    href="#about"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setfirst(!show);
                    }}
                    className="  head_hover"
                    href="#service"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setfirst(!show);
                    }}
                    className="  head_hover"
                    href="#choose"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setfirst(!show);
                    }}
                    className="  head_hover"
                    href="#blog"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setfirst(!show);
                    }}
                    className=" head_hover"
                    href="#faq"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  {" "}
                  <button className=" main_btn mb-0 font-outfit d-block d-sm-none color-litewhite  text-16 lh-24  fw-semibold  ">
                    Contact Us
                  </button>
                </li>
              </ul>
              <button className=" main_btn mb-0 font-outfit d-none d-sm-block color-litewhite  text-16 lh-24  fw-semibold  ">
                Contact Us
              </button>
            </div>
            <div
              onClick={() => {
                setfirst(!show);
              }}
              class="menu d-block d-lg-none z_9  "
            >
              <span></span>
              <span class="my-2"></span>
              <span></span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Mynav;
