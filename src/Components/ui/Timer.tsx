import { useEffect, useState } from "react";

export default function Timer({ next }: { next: () => void }) {
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
      setTime(5);
    }
  }, [time]);

  return <div>{time}</div>;
}
