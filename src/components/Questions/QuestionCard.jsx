import Option from "./Option";
import ProgressBar from "./ProgressBar";

export default function QuestionCard({ question, onChange }) {
  return (
    <div id="quiz">
      <div id="question">
        <ProgressBar />
        <h2>{question.text}</h2>
        <ul id="answers">
          {question.answers.map((answer) => (
            <Option
              key={answer.answer}
              textAnswer={answer}
              onChangeQuestion={onChange}
              question={question}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
