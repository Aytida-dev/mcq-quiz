export default function CompletedPage({
  score,
  totalScore,
}: {
  score: number;
  totalScore: number;
}) {
  let color, message;
  if (score / totalScore < 1 / 3) {
    color = "red";
    message = "You need to work hard";
  } else if (score / totalScore < 2 / 3) {
    color = "yellow";
    message = "You can do better";
  } else {
    color = "green";
    message = "You did great";
  }

  function handleRestart() {
    window.location.reload();
  }

  return (
    <div className="m-auto h-2/3 w-full lg:h-1/2 lg:w-1/2 lg:border border-white text-white p-20 ">
      <div className="text-white flex flex-col justify-between h-full items-center">
        <h1 className="text-3xl">Quiz Completed</h1>
        {/* create a progress bar */}
        <div className="h-2 w-full bg-gray-700 rounded-full">
          <div
            className="h-full rounded-full transition-all duration-500 ease-in-out"
            style={{
              width: `${(score / totalScore) * 100}%`,
              backgroundColor: color,
            }}
          ></div>
        </div>
        <h2 className="text-2xl flex flex-col items-center gap-5">
          <span>
            Score : {score}/{totalScore}
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
