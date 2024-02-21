import { useContext } from "react";
import { QuizContext } from "../../store/quiz-context";

export default function Option({ textAnswer }) {
  // useCONTEXT
  const { handleQuestionChangeCtx, isActiveOptionCtx } =
    useContext(QuizContext);

  let styleClass = "";
  if (!isActiveOptionCtx) {
    styleClass = textAnswer.result ? "correct" : "wrong";
  }

  return (
    <li className="answer">
      <button
        className={isActiveOptionCtx ? "" : styleClass}
        onClick={() => handleQuestionChangeCtx(textAnswer)}
      >
        {textAnswer.answer}
      </button>
    </li>
  );
}
