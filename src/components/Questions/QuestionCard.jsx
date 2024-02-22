import Option from "./Option";
import ProgressBar from "./ProgressBar";
import { useContext } from "react";
import { QuizContext } from "../../store/quiz-context";

export default function QuestionCard() {
  const { shuffleAnswersCtx, currentQuestionCtx } = useContext(QuizContext);

  // console.log(currentQuestionCtx);

  return (
    <div id="quiz">
      <div id="question">
        <ProgressBar />
        <h2>{currentQuestionCtx.text}</h2>
        <ul id="answers">
          {shuffleAnswersCtx.map((answer) => (
            <Option key={answer.answer} answer={answer} />
          ))}
        </ul>
      </div>
    </div>
  );
}
