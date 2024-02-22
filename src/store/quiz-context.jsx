import { createContext, useState, useEffect } from "react";
import { QUESTIONS_QUIZ } from "../questions";
import { getShuffleAnswers } from "../util/statistics";

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
  isActiveQuiz,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(
    QUESTIONS_QUIZ[recordResults.length]
  );

  console.log(currentQuestion);
  useEffect(() => {
    if (currentQuestion) {
      setCurrentQuestion((prev) => {
        const shuffleAnswers = [];
        getShuffleAnswers(shuffleAnswers, prev);
        return { ...prev, shuffleAnswers };
      });
    }
  }, []);

  // random answers position
  // const shuffleAnswers = [];
  // getShuffleAnswers(shuffleAnswers, currentQuestion);
  // console.log(shuffleAnswers);

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
          setCurrentQuestion(QUESTIONS_QUIZ[newResults.length]);
          setIsActiveOption(true);
        }, 3000);
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
    shuffleAnswersCtx: currentQuestion.answers,
  };
  return (
    <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>
  );
}
