import React from "react";
import "./Start.css";

const Start = ({ onQuizStart }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <div classname="title">
            <h1>Start the Questionnaire</h1>
          </div>
          <p>Please provide precise answers.</p>
          <button className="button" onClick={onQuizStart}>
            Start
          </button>
        </div>
      </div>
      <button className="button">Exit</button>
    </div>
  );
};

export default Start;
