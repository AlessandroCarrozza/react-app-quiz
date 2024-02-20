import { useState, useEffect } from "react";

export default function ProgressTimer() {
  const [remainingTime, setRemainingTime] = useState(3000);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("interval set");
  //     setRemainingTime((prevTime) => prevTime - 10);
  //   }, 10);

  //   return () => {
  //     clearInterval(interval);
  //     setRemainingTime(3000);
  //   };
  // }, []);
  return <progress max={3000} value={remainingTime} />;
}
