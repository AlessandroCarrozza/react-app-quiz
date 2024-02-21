import { createContext } from "react";
import { QUESTIONS_QUIZ } from "../questions";

// context creation
export const QuizContext = createContext({
  recordResultsCtx: [],
  currentQuestionCtx: null,
  handleQuestionChangeCtx: () => {},
});

// function component context
export default function QuizContextProvider({
  children,
  recordResults,
  setRecordResults,
}) {
  let currentQuestion = QUESTIONS_QUIZ[recordResults.length];

  // function for the question change
  function handleQuestionChange(answer) {
    setRecordResults((prevResults) => {
      let newId = prevResults.length;
      let newResults = [
        ...prevResults,
        { question: currentQuestion.text, userAnswer: answer, id: newId },
      ];
      return newResults;
    });
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
