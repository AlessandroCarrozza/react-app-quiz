export default function Log({ theResults }) {
  return (
    <ol>
      {theResults.map((result) => {
        let styleClass;
        if (result.userAnswer.result === true) {
          styleClass = "correct";
        } else if (result.userAnswer.result === false) {
          styleClass = "wrong";
        }
        return (
          <li key={result.id}>
            <h3>{result.id + 1}</h3>
            <p className="question">{result.question}</p>
            <p className={`user-answer ${styleClass}`}>
              {result.userAnswer.answer}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
