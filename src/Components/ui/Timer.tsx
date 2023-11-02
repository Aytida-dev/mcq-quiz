import { useEffect, useState } from "react";

export default function Timer({
  next,
  index,
}: {
  next: () => void;
  index: number;
}) {
  const [time, setTime] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      setTime(60);
      next();
    }
  }, [time]);

  useEffect(() => {
    setTime(60);
    console.log("ran");
  }, [index]);

  return (
    <div className="border rounded-full w-10 h-10 flex justify-center items-center text-xl font-bold">
      {time}
    </div>
  );
}
