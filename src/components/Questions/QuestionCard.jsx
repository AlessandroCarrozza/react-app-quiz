import Option from "./Option";
import ProgressBar from "./ProgressBar";
import { useContext, useState } from "react";
import { QuizContext } from "../../store/quiz-context";

export default function QuestionCard() {
  const { currentQuestionCtx } = useContext(QuizContext);

  return (
    <div id="quiz">
      <div id="question">
        <ProgressBar />
        <h2>{currentQuestionCtx.text}</h2>
        <ul id="answers">
          {currentQuestionCtx.answers.map((answer) => (
            <Option key={answer.answer} answer={answer} />
          ))}
        </ul>
      </div>
    </div>
  );
}
