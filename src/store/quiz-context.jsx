import { createContext, useState } from "react";

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
  shuffleAnswers,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(
    shuffleAnswers[recordResults.length]
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
          console.log("next question");
          setCurrentQuestion(shuffleAnswers[newResults.length]);
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
  };
  return (
    <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>
  );
}
