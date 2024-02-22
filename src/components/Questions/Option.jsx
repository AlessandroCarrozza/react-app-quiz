import { useContext } from "react";
import { QuizContext } from "../../store/quiz-context";

export default function Option({ answer }) {
  // useCONTEXT
  const { handleQuestionChangeCtx, isActiveOptionCtx, recordResultsCtx } =
    useContext(QuizContext);

  // console.log(recordResultsCtx);
  // console.log(recordResultsCtx[recordResultsCtx.length - 1]);

  const isClicked =
    recordResultsCtx.length > 0 &&
    recordResultsCtx[recordResultsCtx.length - 1].userAnswer &&
    recordResultsCtx[recordResultsCtx.length - 1].userAnswer.answer ===
      answer.answer;

  // styling buttons post click
  let styleClass = "";
  if (isClicked) {
    styleClass = answer.result ? "correct" : "wrong";
  } else {
    styleClass = "noSelected";
  }

  return (
    <li className="answer">
      <button
        className={isActiveOptionCtx ? "" : styleClass}
        onClick={() => {
          handleQuestionChangeCtx(answer);
        }}
      >
        {answer.answer}
      </button>
    </li>
  );
}
