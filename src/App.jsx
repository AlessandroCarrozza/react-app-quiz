import { useState } from "react";
import QuestionCard from "../src/components/Questions/QuestionCard";
import Results from "./components/Results/Results";
import QuizContextProvider from "./store/quiz-context";
import { QUESTIONS_QUIZ } from "./questions";

function App() {
  const [recordResults, setRecordResults] = useState([]);
  const [isActiveOption, setIsActiveOption] = useState(true);
  const isActiveQuiz = recordResults.length !== QUESTIONS_QUIZ.length;
  return (
    <QuizContextProvider
      recordResults={recordResults}
      setRecordResults={setRecordResults}
      isActiveOption={isActiveOption}
      setIsActiveOption={setIsActiveOption}
      isActiveQuiz={isActiveQuiz}
    >
      {isActiveQuiz ? <QuestionCard /> : <Results />}
    </QuizContextProvider>
  );
}

export default App;
