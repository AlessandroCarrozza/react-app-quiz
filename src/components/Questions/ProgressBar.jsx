import { useState, useEffect, useContext, useRef } from "react";
import { QuizContext } from "../../store/quiz-context";

export default function ProgressTimer() {
  const TIMER = 3000;
  const { handleQuestionChangeCtx, currentQuestionCtx, isActiveOptionCtx } =
    useContext(QuizContext);

  const [remainingTime, setRemainingTime] = useState(TIMER);
  const timerId = useRef(); // useRef per tenere traccia del timeout

  useEffect(() => {
    if (isActiveOptionCtx) {
      // Resetta il timer ogni volta che la domanda cambia o quando il componente viene montato
      setRemainingTime(TIMER);

      // Imposta il timeout
      timerId.current = setTimeout(() => {
        handleQuestionChangeCtx(currentQuestionCtx.userAnswer); // Cambia la domanda al termine del timer
      }, TIMER);

      // Imposta un intervallo per aggiornare il progresso
      const intervalId = setInterval(() => {
        setRemainingTime((prevTime) => Math.max(prevTime - 10, 0));
      }, 10);

      // Pulizia al smontaggio o al cambio della domanda
      return () => {
        clearTimeout(timerId.current);
        clearInterval(intervalId);
      };
    }
  }, [currentQuestionCtx, isActiveOptionCtx, handleQuestionChangeCtx]);

  return <progress max={TIMER} value={remainingTime} />;
}
