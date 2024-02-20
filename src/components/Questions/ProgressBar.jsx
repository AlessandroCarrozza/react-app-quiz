import { useState, useEffect, useContext } from "react";
import { QuizContext } from "../../store/quiz-context";

export default function ProgressTimer() {
  const { handleQuestionChangeCtx, currentQuestionCtx } =
    useContext(QuizContext);
  const [remainingTime, setRemainingTime] = useState(3000);

  useEffect(() => {
    console.log("time started");
    const timer = setTimeout(() => {
      handleQuestionChangeCtx(currentQuestionCtx.userAnswer);
    }, 3000);
    return () => {
      console.log("clear");
      clearTimeout(timer);
    };
  }, []);

  return <progress max={3000} value={remainingTime} />;
}
