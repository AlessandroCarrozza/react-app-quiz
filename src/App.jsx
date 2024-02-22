import { useState } from "react";
import QuestionCard from "../src/components/Questions/QuestionCard";
import Results from "./components/Results/Results";
import QuizContextProvider from "./store/quiz-context";
import { QUESTIONS_QUIZ } from "./questions";

function App() {
  const [recordResults, setRecordResults] = useState([]);
  const [isActiveOption, setIsActiveOption] = useState(true);
  const isQuizEnded =
    recordResults.length === QUESTIONS_QUIZ.length && isActiveOption;
  return (
    <QuizContextProvider
      recordResults={recordResults}
      setRecordResults={setRecordResults}
      isActiveOption={isActiveOption}
      setIsActiveOption={setIsActiveOption}
    >
      {isQuizEnded ? <Results /> : <QuestionCard />}
    </QuizContextProvider>
  );
}

export default App;
