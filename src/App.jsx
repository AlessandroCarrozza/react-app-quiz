import { useState } from "react";
import { QUESTIONS_QUIZ } from "./questions";
import QuestionCard from "../src/components/Questions/QuestionCard";

let num = 0;

function App() {
  //   const [questions, setQuestions] = useState(QUESTIONS_QUIZ);
  const [currentQuestion, setCurrentQuestion] = useState(QUESTIONS_QUIZ[num]);
  const [isActiveQuiz, setIsActiveQuiz] = useState(true);
  // const [isActiveQuestion, setIsActiveQuestion] = useState(true);

  function handleQuestionChange() {
    if (num < QUESTIONS_QUIZ.length - 1) {
      num++;
      setCurrentQuestion(QUESTIONS_QUIZ[num]);
    } else {
      setIsActiveQuiz(false);
    }
  }

  return isActiveQuiz ? (
    <QuestionCard question={currentQuestion} onChange={handleQuestionChange} />
  ) : (
    <p>results</p>
  );
}

export default App;
