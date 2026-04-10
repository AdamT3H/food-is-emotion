"use client";
import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const TIMER_DURATION = 20 * 60 * 1000;

export default function CountdownTimer() {
  const getEndTime = () => {
    const saved = localStorage.getItem("timerEnd");

    if (saved) return parseInt(saved);

    const newEnd = Date.now() + TIMER_DURATION;
    localStorage.setItem("timerEnd", newEnd.toString());
    return newEnd;
  };

  const resetEndTime = () => {
    const newEnd = Date.now() + TIMER_DURATION;
    localStorage.setItem("timerEnd", newEnd.toString());
    return newEnd;
  };

  const calculateTimeLeft = (): TimeLeft => {
    let endTime = getEndTime();
    let difference = endTime - Date.now();

    if (difference <= 0) {
      endTime = resetEndTime();
      difference = endTime - Date.now();
    }

    return {
      days: 0,
      hours: 0,
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setIsMounted(true);

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, "0");

  if (!isMounted) {
    return (
      <div className={styles.timer}>
        <div className={styles.block}>
          <div className={styles.value}>00</div>
          <div className={styles.label}>днів</div>
        </div>

        <div className={styles.separator}>:</div>

        <div className={styles.block}>
          <div className={styles.value}>00</div>
          <div className={styles.label}>годин</div>
        </div>

        <div className={styles.separator}>:</div>

        <div className={styles.block}>
          <div className={styles.value}>00</div>
          <div className={styles.label}>хвилин</div>
        </div>

        <div className={styles.separator}>:</div>

        <div className={styles.block}>
          <div className={styles.value}>00</div>
          <div className={styles.label}>секунд</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.timer}>
      <div className={styles.block}>
        <div className={styles.value}>{format(timeLeft.days)}</div>
        <div className={styles.label}>днів</div>
      </div>

      <div className={styles.separator}>:</div>

      <div className={styles.block}>
        <div className={styles.value}>{format(timeLeft.hours)}</div>
        <div className={styles.label}>годин</div>
      </div>

      <div className={styles.separator}>:</div>

      <div className={styles.block}>
        <div className={styles.value}>{format(timeLeft.minutes)}</div>
        <div className={styles.label}>хвилин</div>
      </div>

      <div className={styles.separator}>:</div>

      <div className={styles.block}>
        <div className={styles.value}>{format(timeLeft.seconds)}</div>
        <div className={styles.label}>секунд</div>
      </div>
    </div>
  );
}