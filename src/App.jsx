import { useState } from "react";
import { QUESTIONS_QUIZ } from "./questions";
import QuestionCard from "../src/components/Questions/QuestionCard";

function App() {
  const [recordResults, setRecordResults] = useState([]);
  const [isActiveQuiz, setIsActiveQuiz] = useState(true);
  let num = recordResults.length;

  const [currentQuestion, setCurrentQuestion] = useState(QUESTIONS_QUIZ[num]);

  function handleQuestionChange(question, answer) {
    if (num < QUESTIONS_QUIZ.length - 1) {
      num++;
      setCurrentQuestion(QUESTIONS_QUIZ[num]);
      setRecordResults((prevResults) => [
        ...prevResults,
        { question: question, answer: answer },
      ]);
    } else {
      setIsActiveQuiz(false);
    }
    console.log(recordResults);
    console.log(recordResults.length);
  }

  return !isActiveQuiz ? (
    <QuestionCard question={currentQuestion} onChange={handleQuestionChange} />
  ) : (
    <p>results</p>
  );
}

export default App;
