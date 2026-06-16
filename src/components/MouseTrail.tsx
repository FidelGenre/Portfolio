"use client";

import { useEffect, useRef } from "react";

type TrailEl = (HTMLDivElement & { x?: number; y?: number }) | null;

export function MouseTrail() {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef<TrailEl[]>([]);

  const colors = Array(20).fill("#ababab");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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

    let raf = 0;
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

        if (next) {
          x += ((next.x ?? x) - x) * 0.15;
          y += ((next.y ?? y) - y) * 0.15;
        }
      });

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {colors.map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            circlesRef.current[i] = el as TrailEl;
          }}
          className="pointer-events-none fixed z-[1000] h-6 w-6 rounded-full bg-[#ababab] opacity-60 transition-colors duration-200 max-[830px]:hidden"
        />
      ))}
    </>
  );
}
