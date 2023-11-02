export default function ProgressBar({ progress }: { progress: number }) {
  let color, message;
  if (progress < 1 / 3) {
    color = "red";
    message = "You need to work hard";
  } else if (progress < 2 / 3) {
    color = "yellow";
    message = "You can do better";
  } else {
    color = "green";
    message = "You did great";
  }
  return (
    <div className="h-2 w-full bg-gray-700 rounded-full">
      <div
        className="h-full rounded-full transition-all duration-500 ease-in-out"
        style={{
          width: `${progress * 100}%`,
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
}
