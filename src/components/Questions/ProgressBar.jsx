import { useState, useEffect, useContext, useRef } from "react";
import { QuizContext } from "../../store/quiz-context";

export default function ProgressTimer() {
  const TIMER = 5000;
  // useCONTEXT
  const { handleQuestionChangeCtx, currentQuestionCtx } =
    useContext(QuizContext);

  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    console.log("TIME START");
    const timer = setTimeout(() => {
      handleQuestionChangeCtx(currentQuestionCtx.userAnswer);
    }, TIMER);
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      setRemainingTime(TIMER);
    };
  }, [currentQuestionCtx]);

  return <progress max={TIMER} value={remainingTime} />;
}
