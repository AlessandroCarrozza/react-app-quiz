import imgResults from "../../assets/quiz-complete.png";
import Statistics from "./Statistics";
import Log from "./Log";

export default function Results({ results }) {
  return (
    <div id="summary">
      <img src={imgResults} alt="Trophy" />
      <h2>quiz completed!</h2>
      <Statistics />
      <Log theResults={results} />
    </div>
  );
}
