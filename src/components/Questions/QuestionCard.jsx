import Option from "./Option";

export default function QuestionCard({ question, onChange }) {
  return (
    <div id="quiz">
      <div id="question">
        <progress></progress>
        <h2>{question.text}</h2>
        <ul id="answers">
          {question.answers.map((answer) => (
            <Option
              key={answer.answer}
              text={answer.answer}
              onChangeQuestion={onChange}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
