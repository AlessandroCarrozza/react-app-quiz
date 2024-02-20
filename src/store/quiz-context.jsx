import { createContext, useState } from "react";
import { QUESTIONS_QUIZ } from "../questions";

export const QuizContext = createContext({
  recordResults: [],
  currentQuestion: null,
  questionChange: () => {},
});

export default function QuizContextProvider({
  children,
  isActiveQuizFunction,
}) {
  const [recordResults, setRecordResults] = useState([]);

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
      isActiveQuizFunction(false);
    }
  }

  console.log(recordResults);

  const ctxValue = {
    recordResultsCtx: recordResults,
    currentQuestionCtx: currentQuestion,
    handleQuestionChangeCtx: handleQuestionChange,
  };
  return (
    <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>
  );
}
