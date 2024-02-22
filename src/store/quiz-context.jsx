import { createContext, useState, useEffect } from "react";
import { QUESTIONS_QUIZ } from "../questions";

// context creation
export const QuizContext = createContext({
  recordResultsCtx: [],
  currentQuestionCtx: null,
  setCurrentQuestion: () => {},
  handleQuestionChangeCtx: () => {},
  // isActiveOptionCtx: isActiveOption,
  setIsActiveOptionCtx: () => {},
});

// function component context
export default function QuizContextProvider({
  children,
  recordResults,
  setRecordResults,
  isActiveOption,
  setIsActiveOption,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(
    QUESTIONS_QUIZ[recordResults.length]
  );

  // function for the question change
  function handleQuestionChange(answer) {
    if (isActiveOption) {
      setIsActiveOption(false);
      setRecordResults((prevResults) => {
        let newResults = [
          ...prevResults,
          {
            question: currentQuestion.text,
            userAnswer: answer,
            id: prevResults.length,
          },
        ];
        setTimeout(() => {
          console.log("timeout post click finished");
          setCurrentQuestion(QUESTIONS_QUIZ[newResults.length]);
          setIsActiveOption(true);
        }, 3000);
        return newResults;
      });
    }
  }

  const ctxValue = {
    recordResultsCtx: recordResults,
    currentQuestionCtx: currentQuestion,
    setCurrentQuestionCtx: setCurrentQuestion,
    handleQuestionChangeCtx: handleQuestionChange,
    isActiveOptionCtx: isActiveOption,
    setIsActiveOptionCtx: setIsActiveOption,
  };
  return (
    <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>
  );
}
