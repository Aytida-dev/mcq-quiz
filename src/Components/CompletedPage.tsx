import ProgressBar from "./ui/ProgessBar";

export default function CompletedPage({
  score,
  totalScore,
  timeTaken,
}: {
  score: number;
  totalScore: number;
  timeTaken: number;
}) {
  let message;
  if (score / totalScore < 1 / 3) {
    message = "You need to work hard";
  } else if (score / totalScore < 2 / 3) {
    message = "You can do better";
  } else {
    message = "You did great";
  }

  function handleRestart() {
    window.location.reload();
  }

  const minutes = Math.floor(timeTaken / 60000);
  const seconds = ((timeTaken % 60000) / 1000).toFixed(0);

  return (
    <div className="m-auto h-2/3 w-full lg:h-1/2 lg:w-1/2 lg:border border-white text-white p-20 ">
      <div className="text-white flex flex-col justify-between h-full items-center">
        <h1 className="text-3xl">Quiz Completed</h1>
        {/*progress bar */}
        <ProgressBar progress={score / totalScore} />
        <h2 className="text-2xl flex flex-col items-center gap-5">
          <span>
            Score : {score}/{totalScore}
          </span>
          <span className="font-mono">
            {minutes} min : {seconds} sec
          </span>
          <span>{message}</span>
        </h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/3 text-xl flex justify-center items-center "
          onClick={() => handleRestart()}
        >
          restart
        </button>
      </div>
    </div>
  );
}
