import { useContext } from "react";
import { QuizContext } from "../../store/quiz-context";
import { useEffect } from "react";

export default function Option({ textAnswer }) {
  const { handleQuestionChangeCtx } = useContext(QuizContext);

  // useEffect(()=>{

  // }, [])

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
