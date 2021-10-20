import React, { useEffect, useState } from "react";

import { formatTime } from "../utils";

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnwers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next0line
  }, []);
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Thank You!!</h3>
          <p>
            <strong>Your time: </strong>
            {formatTime(time)}
          </p>

          <button className="button is-info mr-2" onClick={onAnswersCheck}>
            Review your anwers
          </button>
          <button className="button is-success" onClick={onReset}>
            Restart again
          </button>
        </div>
      </div>
    </div>
  );
};

export default End;
