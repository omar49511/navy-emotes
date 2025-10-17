"use client"; // Necesario en Next.js si usas Hooks

import { useState, useRef, useEffect } from "react";
import styles from "./carrousel.module.sass";

interface CarrouselProps {
  urls: string[];
}

export const Carrousel: React.FC<CarrouselProps> = ({ urls = [] }) => {
  const [index, setIndex] = useState<number>(0);
  const trackRef = useRef<HTMLUListElement>(null);

  // Función para mover el slider a un índice específico
  const slideTo = (i: number) => {
    if (i >= 0 && i < urls.length) setIndex(i);
  };

  // Función para avanzar o retroceder

  const updateSlide = (direction: "next" | "prev") => {
    setIndex((prev) => {
      let newIndex = direction === "next" ? prev + 1 : prev - 1;
      if (newIndex < 0) newIndex = 0;
      if (newIndex > urls.length - 1) newIndex = urls.length - 1;
      return newIndex;
    });
  };

  // Efecto para actualizar la posición del slider
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sliderContainer}>
        <button onClick={() => updateSlide("prev")} aria-label="Slide anterior">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        <div className={styles.slider}>
          <ul className={styles.sliderTrack} ref={trackRef}>
            {urls.map((url, i) => (
              <li
                key={i}
                className={styles.slide}
                style={{ backgroundImage: `url(${url})` }}
              />
            ))}
          </ul>
        </div>

        <button
          onClick={() => updateSlide("next")}
          aria-label="Siguiente slide"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      <nav className={styles.sliderDots}>
        {urls.map((_, i) => (
          <button
            key={i}
            className={index === i ? styles.active : ""}
            onClick={() => slideTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
          ></button>
        ))}
      </nav>
    </div>
  );
};
