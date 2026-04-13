// FallingFood.jsx
"use client";
import { useEffect, useState } from "react";
import styles from "./FallingFood.module.css";

const ICONS = [
  '/IMG_3197.PNG',
  '/IMG_3198.PNG',
  '/IMG_3199.PNG',
  '/IMG_3200.PNG',
  '/IMG_3201.PNG',
];

const COUNT = 12;
const SPEED = 32;
const OPACITY = 0.3;

export default function FallingFood() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      Array.from({ length: COUNT }, (_, i) => ({
        src:   ICONS[i % ICONS.length],
        left:  (5 + (i * 87 / COUNT) + Math.random() * 6).toFixed(1),
        dur:   (SPEED * 0.7 + Math.random() * SPEED * 0.7).toFixed(1),
        delay: (-SPEED + Math.random() * SPEED * 1.2).toFixed(1),
        size:  Math.round(60 + Math.random() * 60),
      }))
    );
  }, []);

  if (items.length === 0) return null;

  return (
    <div className={styles.wrapper} aria-hidden="true">
      {items.map((item, i) => (
        <img
          key={i}
          src={item.src}
          className={styles.item}
          style={{
            left: `${item.left}%`,
            width: item.size,
            height: item.size,
            animationDuration: `${item.dur}s`,
            animationDelay: `${item.delay}s`,
            opacity: OPACITY,
          }}
        />
      ))}
    </div>
  );
}