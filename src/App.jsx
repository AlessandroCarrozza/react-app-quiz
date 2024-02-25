import { useState } from "react";
import QuestionCard from "../src/components/Questions/QuestionCard";
import Results from "./components/Results/Results";
import QuizContextProvider from "./store/quiz-context";
import { QUESTIONS_QUIZ } from "./questions";
import { generateUniqueArray } from "./util/statistics";

function App() {
  const [recordResults, setRecordResults] = useState([]);
  const [isActiveOption, setIsActiveOption] = useState(true);
  const isQuizEnded =
    recordResults.length === QUESTIONS_QUIZ.length && isActiveOption;

  console.log("app rerendering");

  let arrayRandom = generateUniqueArray();
  console.log(arrayRandom);
  const shuffleAnswers = QUESTIONS_QUIZ.map((question) => ({
    ...question,
    answers: [
      question.answers[arrayRandom[0]],
      question.answers[arrayRandom[1]],
      question.answers[arrayRandom[2]],
      question.answers[arrayRandom[3]],
    ],
  }));
  return (
    <QuizContextProvider
      recordResults={recordResults}
      setRecordResults={setRecordResults}
      isActiveOption={isActiveOption}
      setIsActiveOption={setIsActiveOption}
      shuffleAnswers={shuffleAnswers}
    >
      {isQuizEnded ? <Results /> : <QuestionCard />}
    </QuizContextProvider>
  );
}

export default App;
