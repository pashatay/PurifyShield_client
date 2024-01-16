import React from "react";
import "./Details.css";
import DetailsSvg from "../../assets/Details.svg";

function Details() {
  return (
    <div
      className="details-section"
      style={{ backgroundImage: `url(${DetailsSvg})` }}
    >
      {/* Content can be overlaid here if needed */}
    </div>
  );
}

export default Details;
