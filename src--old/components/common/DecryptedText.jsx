import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

export default function DecryptedText({
  text,
  speed = 30,
  delay = 0,
  className = "",
  trigger = "mount", 
}) {
  const [output, setOutput] = useState("");
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (trigger === "mount") {
      setTimeout(startDecrypt, delay);
    }
  }, []);

  const startDecrypt = () => {
    if (revealed) return;

    let iterations = 0;

    const interval = setInterval(() => {
      setOutput(
        text
          .split("")
          .map((char, index) => {
            if (index < iterations) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iterations >= text.length) {
        clearInterval(interval);
        setOutput(text);
        setRevealed(true);
      }

      iterations += 1 / 3;
    }, speed);
  };

  return (
    <span
      onMouseEnter={trigger === "hover" ? startDecrypt : undefined}
      className={`font-mono tracking-wide ${className}`}
    >
      {output || text}
    </span>
  );
}
