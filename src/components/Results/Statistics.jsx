import { getAmounts, getStat } from "../../util/statistics";
import { useContext } from "react";
import { QuizContext } from "../../store/quiz-context";

export default function Statistics() {
  const { recordResultsCtx } = useContext(QuizContext);
  const total = recordResultsCtx.length;
  const statistics = getAmounts(recordResultsCtx);

  return (
    <ol id="summary-stats">
      <li>
        <div className="number">{getStat(statistics.skipped, total)}%</div>
        <div className="text">skipped</div>
      </li>
      <li>
        <div className="number">{getStat(statistics.true, total)}%</div>
        <div className="text">answered correctly</div>
      </li>
      <li>
        <div className="number">{getStat(statistics.false, total)}%</div>
        <div className="text">answered incorrectly</div>
      </li>
    </ol>
  );
}
