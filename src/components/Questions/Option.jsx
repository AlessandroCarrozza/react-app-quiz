import { useContext } from "react";
import { QuizContext } from "../../store/quiz-context";

export default function Option({ textAnswer }) {
  const { handleQuestionChangeCtx } = useContext(QuizContext);
  return (
    <li className="answer">
      <button
        // className="selected"
        onClick={() => handleQuestionChangeCtx(textAnswer)}
      >
        {textAnswer.answer}
      </button>
    </li>
  );
}
