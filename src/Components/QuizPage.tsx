import { useEffect, useRef, useState } from "react";
import getQuestions from "../questions.json";
import CompletedPage from "./CompletedPage";
import Timer from "./ui/Timer";
import ProgressBar from "./ui/ProgessBar";

type questionType = {
  question: string;
  options: string[];
  answer: string;
};

const QuizPage = () => {
  const [index, setIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [questions, setQuestions] = useState<questionType[]>([]);
  const scoreRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    function shuffleArray(array: questionType[]) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }

      return array;
    }
    setQuestions(shuffleArray(getQuestions));
    timeRef.current = Date.now();
  }, []);

  function nextHandler() {
    setIndex((prev) => prev + 1);
    if (questions[index].answer === selectedOption) {
      scoreRef.current++;
    }
    if (index === questions.length - 1) {
      timeRef.current = Date.now() - timeRef.current;
    }
    setSelectedOption("");
  }

  if (index === questions.length) {
    return (
      <CompletedPage
        score={scoreRef.current}
        totalScore={questions.length}
        timeTaken={timeRef.current}
      />
    );
  }

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-auto h-2/4 lg:h-2/3 lg:w-1/2 lg:border border-white text-white p-1 lg:p-20 flex flex-col justify-between ">
      <div id="title" className="text-2xl my-4">
        <span>Q.no {index + 1}.</span> {questions[index].question}
      </div>
      <div id="options" className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {questions[index].options.map((option, i) => (
          <label className="w-full flex gap-3 text-lg" key={i}>
            <input
              type="radio"
              name="option"
              onChange={() => setSelectedOption(option)}
              checked={option === selectedOption}
            />
            {option}
          </label>
        ))}
      </div>
      <div id="buttons" className="mt-4 flex justify-center items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/3"
          onClick={() => nextHandler()}
          disabled={selectedOption === ""}
          style={{
            opacity: selectedOption === "" ? 0.5 : 1,
            cursor: selectedOption === "" ? "not-allowed" : "pointer",
          }}
        >
          {index === questions.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
      <div id="timer">
        <Timer next={() => nextHandler()} index={index} />
        <div>
          <ProgressBar progress={(index + 1) / questions.length} />
          <span>
            Attempting : {index + 1} / {questions.length}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
