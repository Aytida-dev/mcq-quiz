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
      next();
      setTime(60);
    }
  }, [time]);

  useEffect(() => {
    setTime(60);
    console.log("ran");
  }, [index]);

  return <div>{time}</div>;
}
