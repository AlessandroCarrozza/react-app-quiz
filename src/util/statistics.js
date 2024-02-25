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

export function generateUniqueArray() {
  const arr = [0, 1, 2, 3];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Scambia gli elementi
  }
  return arr;
}
