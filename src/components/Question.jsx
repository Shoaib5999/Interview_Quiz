import React from "react";
import Options from "./Options";
import "../styles/Question.css";

const Question = ({
  question,
  questionNumber,
  totalQuestions,
  selectedOption,
  onSelectOption,
  onNext,
  onPrevious,
  onSubmit,
  isLastQuestion,
}) => {
  return (
    <div className="question">
      <h2>
        Question {questionNumber}/{totalQuestions}
      </h2>
      <p>{question.question}</p>
      <Options
        options={question.options}
        selectedOption={selectedOption}
        onSelectOption={onSelectOption}
      />
      <div className="navigation-buttons">
        <button onClick={onPrevious} disabled={questionNumber === 1}>
          Previous
        </button>
        {!isLastQuestion ? (
          <button onClick={onNext}>Next</button>
        ) : (
          <button onClick={onSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default Question;
