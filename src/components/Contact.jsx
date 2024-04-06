import React from "react";
import contact_call from "../assets/PNG/contact_img.webp";
import Commonbtn from "./Commonbtn";

function Contact() {
  return (
    <>
      <React.Fragment>
        <div className="container py_47" id="contact">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-5  col-12">
              <div className=" max_w_478">
                <h2 className=" mb-0  font-outfit fw-semibold text-48 lh-57 color-liteblack">
                  Contact <span className=" fw-light">Us</span>
                </h2>
                <p className="  mb-0 font-exo2 fw-normal text-16 lh-24  color-grey mt-1 mt-sm-2 mt-md-3">
                  Feel free to contact us any time . We will get back to you{" "}
                  <span
                    className=" d-xl-block
                  "
                  >
                    as soon as we can!
                  </span>
                </p>
                <form>
                  <div className=" mt-2 pt-2 d-flex flex-column flex-sm-row gap_11">
                    <div className=" d-flex flex-column">
                      <label
                        for="name"
                        className=" mb-0 font-exo2  fw-normal text-16  lh-24 color-liteblack "
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="name"
                        className=" mt-2 name_input"
                      />
                    </div>
                    <div className=" d-flex flex-column">
                      <label
                        for="lname"
                        className=" mb-0 font-exo2  fw-normal text-16  lh-24 color-liteblack "
                      >
                        Last Name
                      </label>
                      <input
                        id="lname"
                        type="name"
                        className=" mt-2 name_input"
                      />
                    </div>
                  </div>
                  {/* email---input */}
                  <div className=" d-flex  flex-column">
                    <label
                      for="mail"
                      className=" mb-0 mt-sm-3 mt-2  font-exo2  fw-normal text-16  lh-24 color-liteblack "
                    >
                      Email
                    </label>
                    <input
                      id="mail"
                      type="name"
                      className=" mt-2 email_input"
                    />
                  </div>
                  {/* message---input */}
                  <div className=" d-flex flex-column">
                    <label
                      for="msg"
                      className=" mb-0 mt-sm-3 mt-2 font-exo2  fw-normal text-16  lh-24 color-liteblack "
                    >
                      Message
                    </label>
                    <textarea
                      id="msg"
                      name=""
                      className=" textarea_input mt-2"
                    ></textarea>
                  </div>
                  <button type="submit" className=" border-0 mt-sm-4 mt-3">
                    <Commonbtn text="Submit" />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-xl-7 align-items-center  col-12 d-flex justify-content-lg-end">
              <div className="mt-3 mt-lg-0" data-aos="zoom-in">
                <img
                  className=" w-100 contact_img_w br_12"
                  src={contact_call}
                  alt="contact_img"
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
}

export default Contact;
