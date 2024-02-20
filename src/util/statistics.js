export function getAmounts(array) {
  const statistics = array.reduce(
    (acc, obj) => {
      if (obj.userAnswer?.result === true) {
        acc.true += 1;
      } else if (obj.userAnswer?.result === false) {
        acc.false += 1;
      } else if (obj.userAnswer === undefined) {
        acc.skipped += 1;
      }
      return acc;
    },
    { true: 0, false: 0, skipped: 0 }
  );

  return statistics;
}

export function getStat(amount, total) {
  const stat = (amount * 100) / total;
  return Math.floor(stat);
}

export function getShuffleAnswers(array, currentQuestion) {
  do {
    function getRandomIndex() {
      return Math.floor(Math.random() * 4);
    }
    const index = getRandomIndex();
    if (!array.includes(currentQuestion.answers[index])) {
      array.push(currentQuestion.answers[index]);
    }
  } while (array.length !== currentQuestion.answers.length);
}
