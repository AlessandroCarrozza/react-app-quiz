import imgResults from "../../assets/quiz-complete.png";
import Statistics from "./Statistics";
import Log from "./Log";

export default function Results() {
  console.log("log results");
  return (
    <div id="summary">
      <img src={imgResults} alt="Trophy" />
      <h2>quiz completed!</h2>
      <Statistics />
      <Log />
    </div>
  );
}
