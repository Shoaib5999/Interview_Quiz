import React from "react";
import "../styles/Result.css";

const Result = ({ score }) => {
  return (
    <div className="result">
      <h2>Test Completed</h2>
      <p>Your Score: {score.toFixed(2)}%</p>
    </div>
  );
};

export default Result;
