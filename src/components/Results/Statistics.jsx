import { getAmounts, getStat } from "../../util/statistics";
import { useContext } from "react";
import { QuizContext } from "../../store/quiz-context";

export default function Statistics() {
  const { recordResultsCtx } = useContext(QuizContext);
  const total = recordResultsCtx.length;

  let perCentSkip = getStat(getAmounts(recordResultsCtx).skipped, total);
  let perCentCorrect = getStat(getAmounts(recordResultsCtx).true, total);
  let perCentWrong = getStat(getAmounts(recordResultsCtx).false, total);

  const perCentRemained = 100 - perCentSkip - perCentCorrect - perCentWrong;

  // add perCentRemained to the bigger PerCent value
  const maxPerCent = Math.max(perCentSkip, perCentCorrect, perCentWrong);
  if (maxPerCent === perCentSkip) {
    perCentSkip += perCentRemained;
  } else if (maxPerCent === perCentCorrect) {
    perCentCorrect += perCentRemained;
  } else {
    perCentWrong += perCentRemained;
  }

  return (
    <ol id="summary-stats">
      <li>
        <div className="number">{perCentSkip}%</div>
        <div className="text">skipped</div>
      </li>
      <li>
        <div className="number">{perCentCorrect}%</div>
        <div className="text">answered correctly</div>
      </li>
      <li>
        <div className="number">{perCentWrong}%</div>
        <div className="text">answered incorrectly</div>
      </li>
    </ol>
  );
}
