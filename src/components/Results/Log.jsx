import { useContext } from "react";
import { QuizContext } from "../../store/quiz-context";

export default function Log() {
  const { recordResultsCtx } = useContext(QuizContext);
  return (
    <ol>
      {recordResultsCtx.map((result) => {
        // assign a style for each result
        let styleClass = "skipped";
        styleClass =
          result.userAnswer !== undefined
            ? result.userAnswer.result // result.userAnswer.result is true
              ? "correct"
              : "wrong"
            : styleClass;
        return (
          <li key={result.id}>
            <h3>{result.id + 1}</h3>
            <p className="question">{result.question}</p>
            <p className={`user-answer ${styleClass}`}>
              {result.userAnswer !== undefined
                ? result.userAnswer.answer
                : "skipped"}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
