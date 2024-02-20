import { useState } from "react";
import { QUESTIONS_QUIZ } from "./questions";
import QuestionCard from "../src/components/Questions/QuestionCard";
import Results from "./components/Results/Results";

function App() {
  const [recordResults, setRecordResults] = useState([]);
  const [isActiveQuiz, setIsActiveQuiz] = useState(true);

  let currentQuestion = QUESTIONS_QUIZ[recordResults.length];

  function handleQuestionChange(question, answer) {
    setRecordResults((prevResults) => {
      let newId = prevResults.length;
      let newResults = [
        ...prevResults,
        { question: question, userAnswer: answer, id: newId },
      ];
      return newResults;
    });
    if (recordResults.length >= QUESTIONS_QUIZ.length - 1) {
      setIsActiveQuiz(false);
    }
  }

  console.log(recordResults);

  return isActiveQuiz ? (
    <QuestionCard question={currentQuestion} onChange={handleQuestionChange} />
  ) : (
    <Results results={recordResults} />
  );
}

export default App;
