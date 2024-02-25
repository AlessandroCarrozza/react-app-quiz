import { useState, useEffect, useContext, useRef } from "react";
import { QuizContext } from "../../store/quiz-context";

export default function ProgressTimer() {
  const TIMER = 3000;
  const { handleQuestionChangeCtx, currentQuestionCtx, isActiveOptionCtx } =
    useContext(QuizContext);

  const [remainingTime, setRemainingTime] = useState(TIMER);
  // const timerId = useRef();

  useEffect(() => {
    if (isActiveOptionCtx) {
      console.log("effect start");
      // Resetta il timer ogni volta che la domanda cambia o quando il componente viene montato
      setRemainingTime(TIMER);

      // Imposta il timeout
      const timer = setTimeout(() => {
        handleQuestionChangeCtx(currentQuestionCtx.userAnswer); // Cambia la domanda al termine del timer
      }, TIMER);

      // Imposta un intervallo per aggiornare il progresso
      const interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 10);
      }, 10);

      // Pulizia al smontaggio o al cambio della domanda
      return () => {
        console.log("clean effect");
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [currentQuestionCtx, handleQuestionChangeCtx]);

  return <progress max={TIMER} value={remainingTime} />;
}
