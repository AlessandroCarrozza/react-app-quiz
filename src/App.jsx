import { useState } from "react";
import { QUESTIONS_QUIZ } from "./questions";
import QuestionCard from "../src/components/Questions/QuestionCard";
import Results from "./components/Results/Results";

function App() {
  const [recordResults, setRecordResults] = useState([]);
  const [isActiveQuiz, setIsActiveQuiz] = useState(true);
  let num = recordResults.length;

  const [currentQuestion, setCurrentQuestion] = useState(QUESTIONS_QUIZ[num]);

  function handleQuestionChange(question, answer) {
    if (num < QUESTIONS_QUIZ.length - 1) {
      setCurrentQuestion(QUESTIONS_QUIZ[num + 1]);
      setRecordResults((prevResults) => {
        let newNum = prevResults.length;
        let newResults = [
          ...prevResults,
          { question: question, userAnswer: answer, id: newNum },
        ];
        return newResults;
      });
    } else {
      setIsActiveQuiz(false);
    }
  }

  return isActiveQuiz ? (
    <QuestionCard question={currentQuestion} onChange={handleQuestionChange} />
  ) : (
    <Results results={recordResults} />
  );
}

export default App;
