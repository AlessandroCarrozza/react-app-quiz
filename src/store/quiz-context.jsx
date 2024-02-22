import { createContext, useState } from "react";
import { QUESTIONS_QUIZ } from "../questions";

// context creation
export const QuizContext = createContext({
  recordResultsCtx: [],
  currentQuestionCtx: null,
  setCurrentQuestion: () => {},
  handleQuestionChangeCtx: () => {},
  isActiveOptionCtx: null,
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

  const [isActiveTimer, setIsActiveTimer] = useState(true);

  // function for the question change
  function handleQuestionChange(answer) {
    if (isActiveOption) {
      setIsActiveOption(false);
      setIsActiveTimer(true);
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
          console.log("next question");
          setIsActiveTimer(false); // qui devo stoppare il timeout dentro lo useEffect
          setCurrentQuestion(QUESTIONS_QUIZ[newResults.length]);
          setIsActiveOption(true);
        }, 1000);
        return newResults;
      });
    }
  }

  console.log(recordResults);

  const ctxValue = {
    recordResultsCtx: recordResults,
    currentQuestionCtx: currentQuestion,
    setCurrentQuestionCtx: setCurrentQuestion,
    handleQuestionChangeCtx: handleQuestionChange,
    isActiveOptionCtx: isActiveOption,
    setIsActiveOptionCtx: setIsActiveOption,
    isActiveTimerCtx: isActiveTimer,
    setIsActiveTimerCtx: setIsActiveTimer,
  };
  return (
    <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>
  );
}
