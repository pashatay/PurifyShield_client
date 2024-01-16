import React from "react";
import "./Introduction.css";
import HomeSvg from "../../assets/Home.svg";

function Introduction() {
  return (
    <div
      className="introduction-section"
      style={{ backgroundImage: `url(${HomeSvg})` }}
    ></div>
  );
}

export default Introduction;
