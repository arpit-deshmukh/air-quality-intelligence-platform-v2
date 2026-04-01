import { useEffect, useState } from "react";

export default function CountdownTimer({ seconds = 15, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft === 0) { onComplete?.(); return; }
    const interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft, onComplete]);

  return (
    <div className="text-sm mt-2" style={{ color: "#64748b" }}>
       fetching AQI data: <span className="font-semibold" style={{ color: "#a5b4fc" }}>{timeLeft}s</span>
    </div>
  );
}
