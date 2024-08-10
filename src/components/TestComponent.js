// TestComponent.js
import React, { useState } from "react";
import { questions } from "./Psychometrictestquestion";
import passImage from "../assets/images/right.jpg";
import failImage from "../assets/images/wrong.jpg";
const TestComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerOptionClick = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null); // Reset selected option for next question
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const field = "Nursing , MBBS , BAMS , BHMS , Pharmacy";
  const field2 = "Better Luck, Try Again Next Time ";
  const getResultImage = () => {
    if (score >= 5) {
      return passImage;
    } else {
      return failImage;
    }
  };
  // Progress Bar
  const progressBar = () => {
    return ((currentQuestion + 1) / questions.length) * 100;
  };
  return (
    <div className="container">
      {showScore ? (
        <div className="result flex justify-center items-center flex-col">
          <img
            src={getResultImage()}
            alt={score >= 5 ? "Pass" : "Fail"}
            className="mb-4 w-[50%] h-[50%]"
          />
          <h2>
            You scored {score} out of {questions.length}
          </h2>
          <div className="mb-2">
            {score > 5 ? (
              <h2 className={`${score >= 5}`}>
                The Desired field for you is {field}
              </h2>
            ) : (
              <h2 className={`${score < 5}`}>{field2}</h2>
            )}
          </div>
          <button
            onClick={restartQuiz}
            className=" bg-gradient-to-r from-blue-500 to-teal-400 text-white py-1 px-4 rounded-full font-semibold hover:bg-pink-600 transition duration-300 justify-center "
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="progress-barbg-gradient-to-r from-blue-500 to-teal-400 h-2 rounded-full overflow-hidden mb-4">
            <div
              className="bg-blue-500 h-full  "
              style={{ width: `${progressBar()}%` }}
            />
          </div>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option) => (
              <label key={option.value} className="block mb-2">
                <input
                  type="radio"
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={() => handleOptionChange(option.value)}
                  className="mr-2"
                />
                {option.label}
              </label>
            ))}
          </div>
          <button
            onClick={handleAnswerOptionClick}
            disabled={selectedOption === null} // Disable button until an option is selected
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4"
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default TestComponent;
 