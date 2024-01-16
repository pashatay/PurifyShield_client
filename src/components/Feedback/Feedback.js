import React from "react";
import "./Feedback.css";
import FeedbackSvg from "../../assets/Feedback.svg";

function Feedback() {
  return (
    <div
      className="feedback-section"
      style={{ backgroundImage: `url(${FeedbackSvg})` }}
    >
      {/* Content can be overlaid here if needed */}
    </div>
  );
}

export default Feedback;
