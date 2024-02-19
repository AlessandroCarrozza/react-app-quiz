export default function Option({ textAnswer, onChangeQuestion, question }) {
  return (
    <li className="answer">
      <button onClick={() => onChangeQuestion(question.text, textAnswer)}>
        {textAnswer.answer}
      </button>
    </li>
  );
}
