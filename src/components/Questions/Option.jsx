import { useContext } from "react";
import { QuizContext } from "../../store/quiz-context";

export default function Option({ textAnswer }) {
  // useCONTEXT
  const { handleQuestionChangeCtx } = useContext(QuizContext);

  return (
    <li className="answer">
      <button onClick={() => handleQuestionChangeCtx(textAnswer)}>
        {textAnswer.answer}
      </button>
    </li>
  );
}
