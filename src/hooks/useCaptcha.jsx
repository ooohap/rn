import { useState } from "react";

export const useCaptcha = () => {
  const [captchaValue, setCaptchaValue] = useState("");

  const generateCaptcha = () => {
    const randomCaptcha = Math.floor(1000 + Math.random() * 9000).toString(); // Random 4-digit number
    setCaptchaValue(randomCaptcha);
  };

  return { captchaValue, generateCaptcha };
};
