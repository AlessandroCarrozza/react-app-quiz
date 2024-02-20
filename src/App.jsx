import { useState } from "react";
import { QUESTIONS_QUIZ } from "./questions";
import QuestionCard from "../src/components/Questions/QuestionCard";
import imgResults from "./assets/quiz-complete.png";

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
        { question: question, userAnswer: answer },
      ]);
    } else {
      setIsActiveQuiz(false);
    }
    console.log(recordResults);
    console.log(recordResults.length);
  }

  return isActiveQuiz ? (
    <QuestionCard question={currentQuestion} onChange={handleQuestionChange} />
  ) : (
    <div id="summary">
      <img src={imgResults} alt="Trophy" />
      <h2>quiz completed!</h2>
      <ol id="summary-stats">
        <li>
          <div className="number">70%</div>
          <div className="text">skipped</div>
        </li>
        <li>
          <div className="number">70%</div>
          <div className="text">answered correctly</div>
        </li>
        <li>
          <div className="number">70%</div>
          <div className="text">answered incorrectly</div>
        </li>
      </ol>

      <ol>
        <li>
          <h3>1</h3>
          <p className="question">QuestionQuestionQuestion</p>
          <p className="user-answer skipped">Answer</p>
        </li>
        <li>
          <h3>1</h3>
          <p className="question">QuestionQuestionQuestion</p>
          <p className="user-answer correct">Answer</p>
        </li>
        <li>
          <h3>1</h3>
          <p className="question">QuestionQuestionQuestion</p>
          <p className="user-answer wrong">Answer</p>
        </li>
      </ol>
    </div>
  );
}

export default App;
