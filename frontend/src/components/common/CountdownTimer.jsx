import { useEffect, useState } from "react";

export default function CountdownTimer({ seconds = 15, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft === 0) {
      onComplete?.();   
      setTimeLeft(seconds); // restart timer
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, seconds, onComplete]);

  return (
    <div className="text-sm mt-2 text-gray-600">
      🔄 Refreshing data in: <span className="font-semibold">{timeLeft}s</span>
    </div>
  );
}
