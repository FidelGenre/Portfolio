import { useEffect, useRef } from "react";
import styles from "./MouseTrail.module.css";

export const MouseTrail = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  const colors = Array(20).fill("#ababab"); 

  useEffect(() => {
    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    circlesRef.current.forEach((circle, index) => {
      if (circle) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = colors[index];
      }
    });

    const animate = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circlesRef.current.forEach((circle, index) => {
        if (!circle) return;
        const next = circlesRef.current[index + 1] || circlesRef.current[0];

        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

        circle.x = x;
        circle.y = y;

        x += (next.x - x) * 0.15;
        y += (next.y - y) * 0.15;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {colors.map((_, i) => (
        <div
          key={i}
          className={styles.circle}
          ref={(el) => (circlesRef.current[i] = el)}
        />
      ))}
    </>
  );
};