export default function ProgressBar({ progress }: { progress: number }) {
  let color;
  if (progress < 1 / 3) {
    color = "red";
  } else if (progress < 2 / 3) {
    color = "yellow";
  } else {
    color = "green";
  }
  return (
    <div className="h-4 w-full bg-gray-700 rounded-full">
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
