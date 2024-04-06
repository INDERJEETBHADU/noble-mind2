import React from "react";
import ellipse from "../assets/SVG/ellipse.svg";
import Accordion from "react-bootstrap/Accordion";

function Question() {
  return (
    <>
      <div className=" position-relative" id="faq">
        <div className="container">
          <h2 className=" font-outfit mb-0  fw-light text-48 lh-57 text-center color-liteblack">
            Frequently <span className=" fw-semibold">Asked Questions</span>
          </h2>
          <p className=" mb-0 font-exo2 fw-normal text-16  lh-24 text-center color-grey mt-3">
            Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu
            <span className=" d-md-block">
              volutpat mi leo. Nibh nisl consequat metus.
            </span>
          </p>
          {/* accordion---here */}
          <div className=" d-flex justify-content-center mt-5 pt-1   pb-4   pt-1  ">
            <Accordion className=" w-100 max_w_726    ">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What is Artificial Intelligence (AI)?
                </Accordion.Header>
                <Accordion.Body>
                  Artificial Intelligence refers to the development of computer
                  systems that can perform tasks that typically require human
                  intelligence. These tasks include learning, reasoning,
                  problem-solving, perception, and language understanding.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className=" my_18" eventKey="1">
                <Accordion.Header>
                  How does AI benefit our company?
                </Accordion.Header>
                <Accordion.Body>
                  Artificial Intelligence refers to the development of computer
                  systems that can perform tasks that typically require human
                  intelligence. These tasks include learning, reasoning,
                  problem-solving, perception, and language understanding.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  What types of AI technologies are relevant to our industry?
                </Accordion.Header>
                <Accordion.Body>
                  Artificial Intelligence refers to the development of computer
                  systems that can perform tasks that typically require human
                  intelligence. These tasks include learning, reasoning,
                  problem-solving, perception, and language understanding.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className=" my_18" eventKey="3">
                <Accordion.Header>
                  How can our employees adapt to AI integration?
                </Accordion.Header>
                <Accordion.Body>
                  Artificial Intelligence refers to the development of computer
                  systems that can perform tasks that typically require human
                  intelligence. These tasks include learning, reasoning,
                  problem-solving, perception, and language understanding.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  How can our company ensure data security with AI?
                </Accordion.Header>
                <Accordion.Body>
                  Artificial Intelligence refers to the development of computer
                  systems that can perform tasks that typically require human
                  intelligence. These tasks include learning, reasoning,
                  problem-solving, perception, and language understanding.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className=" ellipse_pos_question_1  position-absolute">
          <img src={ellipse} alt="ellipse" />
        </div>
        <div className=" ellipse_pos_question_2  position-absolute">
          <img src={ellipse} alt="ellipse" />
        </div>
      </div>
    </>
  );
}

export default Question;
