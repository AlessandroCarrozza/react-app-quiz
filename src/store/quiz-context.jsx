import { createContext, useState } from "react";
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

  const [isActiveOption, setIsActiveOption] = useState(true);

  // function for the question change
  function handleQuestionChange(answer) {
    if (isActiveOption) {
      setIsActiveOption(false);
      setTimeout(() => {
        setIsActiveOption(true);
        setRecordResults((prevResults) => {
          let newId = prevResults.length;
          let newResults = [
            ...prevResults,
            { question: currentQuestion.text, userAnswer: answer, id: newId },
          ];
          return newResults;
        });
      }, 3000);
    }
  }

  console.log(recordResults);

  const ctxValue = {
    recordResultsCtx: recordResults,
    currentQuestionCtx: currentQuestion,
    handleQuestionChangeCtx: handleQuestionChange,
    isActiveOptionCtx: isActiveOption,
    setIsActiveOptionCtx: setIsActiveOption,
  };
  return (
    <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>
  );
}
