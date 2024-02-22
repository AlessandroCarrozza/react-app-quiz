import { useContext } from "react";
import { QuizContext } from "../../store/quiz-context";

export default function Option({ answer }) {
  // useCONTEXT
  const { handleQuestionChangeCtx, isActiveOptionCtx, recordResultsCtx } =
    useContext(QuizContext);

  let styleClass = "";
  if (
    !isActiveOptionCtx &&
    recordResultsCtx[recordResultsCtx.length - 1].userAnswer.answer ===
      answer.answer
  ) {
    styleClass = answer.result ? "correct" : "wrong";
  } else {
    styleClass = "noSelected";
  }

  return (
    <li className="answer">
      <button
        className={isActiveOptionCtx ? "" : styleClass}
        onClick={() => handleQuestionChangeCtx(answer)}
      >
        {answer.answer}
      </button>
    </li>
  );
}
