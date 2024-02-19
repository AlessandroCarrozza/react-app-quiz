export default function Option({ text, onChangeQuestion }) {
  return (
    <li className="answer">
      <button onClick={() => onChangeQuestion()}>{text}</button>
    </li>
  );
}
