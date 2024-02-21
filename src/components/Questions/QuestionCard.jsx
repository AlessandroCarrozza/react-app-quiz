import Option from "./Option";
import ProgressBar from "./ProgressBar";
import { useContext } from "react";
import { QuizContext } from "../../store/quiz-context";
import { getShuffleAnswers } from "../../util/statistics";

export default function QuestionCard() {
  const { currentQuestionCtx } = useContext(QuizContext);

  // random answers position
  const shuffleAnswers = [];
  getShuffleAnswers(shuffleAnswers, currentQuestionCtx);
  // console.log(shuffleAnswers);

  return (
    <div id="quiz">
      <div id="question">
        <ProgressBar />
        <h2>{currentQuestionCtx.text}</h2>
        <ul id="answers">
          {shuffleAnswers.map((answer) => (
            <Option key={answer.answer} textAnswer={answer} />
          ))}
        </ul>
      </div>
    </div>
  );
}
