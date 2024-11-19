import React, { useState } from "react";
import Question from "./components/Question";
import Result from "./components/Result";
import "./styles/App.css";
import questions from "./assets/question.js";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleOptionSelect = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = index;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });
    return (score / questions.length) * 100;
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Interview Quiz</h1>
      </header>
      {!submitted ? (
        <Question
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          selectedOption={answers[currentQuestion]}
          onSelectOption={handleOptionSelect}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSubmit={handleSubmit}
          isLastQuestion={currentQuestion === questions.length - 1}
        />
      ) : (
        <Result score={calculateScore()} />
      )}
    </div>
  );
};

export default App;
