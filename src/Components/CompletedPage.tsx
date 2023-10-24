export default function CompletedPage({
  score,
  totalScore,
}: {
  score: number;
  totalScore: number;
}) {
  let color;
  if (score / totalScore < 1 / 3) {
    color = "red";
  } else if (score / totalScore < 2 / 3) {
    color = "yellow";
  } else {
    color = "green";
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
        <h2 className="text-2xl">
          Score : {score}/{totalScore}
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
