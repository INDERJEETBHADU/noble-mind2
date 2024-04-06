import React from "react";
import footer_logo from "../assets/SVG/footer_logo.svg";
import { Facebook, Insta, Twitter, Linkdin } from "../common/Icon";

function Footer() {
  return (
    <>
      <footer className=" bg_black mt_neg_1">
        <div className="container py-1">
          <div className="row py-5  my-1 ">
            <div className="col-xl-8 col-lg-6 col-sm-6 col-12 d-flex justify-content-center justify-content-md-start">
              <div className=" ">
                <img
                  className=" cursor_pointer"
                  src={footer_logo}
                  alt="footer_logo"
                />
                <div className=" pt-1">
                  <h3 className=" font-exo2 mb-0 fw-normal text-16 lh-24 text-white mt-4">
                    Follow Us
                  </h3>
                </div>
                {/* social-box--here */}
                <div className=" d-flex gap-3 align-items-center mt-2">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="social_icon d-flex align-items-center justify-content-center"
                  >
                    <Facebook />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="social_icon d-flex align-items-center justify-content-center"
                  >
                    <Insta />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    className="social_icon d-flex align-items-center justify-content-center"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="www.linkedin.com"
                    target="_blank"
                    className="social_icon d-flex align-items-center justify-content-center"
                  >
                    <Linkdin />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-2 pt-4 pt-sm-0 col-lg-3 col-sm-3 col-6 d-flex justify-content-end ">
              <div className="">
                <h5 className=" font-outfit fw-semibold text-16 lh-24  text-white">
                  Maine
                </h5>
                <ul className="font-exo2 fw-normal text-16 lh-24 d-flex flex-column gap_14 mt-3 pt-1">
                  <li>
                    <a className=" footer_link  color-pencil" href="">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className=" footer_link  color-pencil" href="">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className=" footer_link  color-pencil" href="">
                      services
                    </a>
                  </li>
                  <li>
                    <a className=" footer_link color-pencil" href="">
                      Why Choose Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 pt-4 pt-sm-0 col-lg-3 col-sm-3 col-6 d-flex justify-content-sm-end justify-content-center">
              <div className="">
                <h5 className=" font-outfit fw-semibold text-16 lh-24  text-white">
                  Legal
                </h5>
                <ul className="font-exo2 fw-normal text-16 lh-24 d-flex flex-column gap_14 mt-3 pt-1">
                  <li>
                    <a
                      className=" footer_link  color-pencil text-nowrap"
                      href=""
                    >
                      Term & Conduction
                    </a>
                  </li>
                  <li>
                    <a className=" footer_link  color-pencil" href="">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className=" footer_link  color-pencil" href="">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a className=" footer_link color-pencil" href="">
                      (629) 555-0129
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-center">
          <div className="footer_line w-100"></div>
        </div>
        <div className=" pt-1 pb_20">
          <p className=" mt-3 text-center mb-0  color-pencil font-exo2 fw-normal text-14 lh-21 ">
            © Copyright {new Date().getFullYear()} Noble Mind | All rights
            reserved.{" "}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
