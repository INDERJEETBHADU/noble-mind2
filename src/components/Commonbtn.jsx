import React from "react";

function Commonbtn(props) {
  return (
    <button
      className={` main_btn mb-0 font-outfit  color-litewhite  text-16 lh-24  fw-semibold `}
    >
      {props.text}
    </button>
  );
}

export default Commonbtn;
