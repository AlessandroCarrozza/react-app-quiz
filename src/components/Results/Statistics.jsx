import { getAmounts, getStat } from "../../util/statistics";

export default function Statistics({ theResults }) {
  const total = theResults.length;
  const statistics = getAmounts(theResults);

  return (
    <ol id="summary-stats">
      <li>
        <div className="number">99%</div>
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
