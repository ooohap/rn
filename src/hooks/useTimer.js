// hooks/useTimer.js
import { useState, useEffect } from "react";

export const useTimer = (generateCaptcha) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    generateCaptcha(); // Generate captcha when component loads
    const savedTimer = localStorage.getItem("timer");
    if (savedTimer) {
      const remainingTime = Number(savedTimer) - new Date().getTime();
      if (remainingTime > 0) {
        setTimer(Math.floor(remainingTime / 1000));
      }
    }
  }, []);

  useEffect(() => {
    if (timer === 0) {
      localStorage.removeItem("timer");
      setTimer(null);
    }
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const startTimer = (seconds) => {
    localStorage.setItem("timer", new Date().getTime() + seconds * 1000);
    setTimer(seconds);
  };

  return { timer, startTimer }; // Ensure this returns an object
};
