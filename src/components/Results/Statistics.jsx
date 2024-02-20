export default function Statistics({ theResults }) {
  function getStat(amount, total) {
    const stat = (amount * 100) / total;
    return Math.floor(stat);
  }

  const statistics = theResults.reduce(
    (acc, obj) => {
      if (obj.userAnswer.result === true) {
        acc.true += 1;
      } else if (obj.userAnswer.result === false) {
        acc.false += 1;
      }
      return acc;
    },
    { true: 0, false: 0 }
  );

  console.log(statistics);

  return (
    <ol id="summary-stats">
      <li>
        <div className="number">70%</div>
        <div className="text">skipped</div>
      </li>
      <li>
        <div className="number">
          {getStat(statistics.true, theResults.length)}%
        </div>
        <div className="text">answered correctly</div>
      </li>
      <li>
        <div className="number">
          {getStat(statistics.false, theResults.length)}%
        </div>
        <div className="text">answered incorrectly</div>
      </li>
    </ol>
  );
}
