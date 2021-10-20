import React, { useState, useEffect, useRef } from "react";
import "./Question.css";

const Question = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();

  const changeHandler = (e) => {
    setSelected(e.target.value);
  };

  const nextClickHandler = (e) => {
    let text = document.getElementById("input").value;
    if (text.length === 0) {
      return setError("Please fill in an answer!");
    }

    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
      document.getElementById("input").value = "";
      setError("");
      data["answer"] = text;
    } else {
      onSetStep(3);
      document.getElementById("input").value = "";
      setError("");
      data["answer"] = text;
    }
  };
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h2 className="question">{data.question}</h2>
          <div className="control">
            <label>
              <input type="textbox" id="input" className="Textbox" />
            </label>
          </div>
          {error && <div className="has-text-danger">{error}</div>}
          <button className="button" onClick={nextClickHandler}>
            Next
          </button>
        </div>
        <button className="button">Exit</button>
      </div>
    </div>
  );
};

export default Question;
