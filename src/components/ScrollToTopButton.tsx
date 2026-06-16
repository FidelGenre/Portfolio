"use client";

import { useEffect, useState } from "react";
import arrowUp from "@/assets/arrowUp.png";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(document.documentElement.scrollTop > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={arrowUp.src}
      alt="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-[10px] z-[9999] h-[200px] w-[200px] cursor-pointer transition-[right] duration-300 ease-in-out max-[830px]:h-[130px] max-[830px]:w-[130px] ${
        visible ? "right-[1px]" : "right-[-210px]"
      }`}
    />
  );
}
