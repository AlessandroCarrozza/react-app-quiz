import { useState } from "react";
import QuestionCard from "../src/components/Questions/QuestionCard";
import Results from "./components/Results/Results";
import QuizContextProvider from "./store/quiz-context";

function App() {
  const [isActiveQuiz, setIsActiveQuiz] = useState(true);
  return (
    <QuizContextProvider isActiveQuizFunction={setIsActiveQuiz}>
      {isActiveQuiz ? <QuestionCard /> : <Results />}
    </QuizContextProvider>
  );
}

export default App;
