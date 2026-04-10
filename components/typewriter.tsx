"use client";

import { useEffect, useState } from "react";

export default function Typewriter() {
  const phrases = [
    "чому ви їсте, навіть коли не голодні",
    "як зупинити постійні зриви",
    "як вийти з цього кола без дієт",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const current = phrases[index];
    const speed = deleting ? 30 : 60;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, charIndex + 1);
        setText(next);
        setCharIndex((prev) => prev + 1);

        if (next.length === current.length) {
          setPause(true);

          setTimeout(() => {
            setPause(false);
            setDeleting(true);
          }, 3000); 
        }
      } else {
        const next = current.slice(0, charIndex - 1);
        setText(next);
        setCharIndex((prev) => prev - 1);

        if (next.length === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, pause]);

  return <span>{text}</span>;
}