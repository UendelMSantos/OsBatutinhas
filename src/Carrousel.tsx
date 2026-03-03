import { useState, useEffect } from "react";
import foto1 from "./assets/bodyImages/6e7cccf7-6464-49a0-9ab3-667a29e64483.jpg";
import foto2 from "./assets/bodyImages/94a2e66f-bdcb-48f1-ae75-2a45dfa6f2b4.jpg";

function Carousel() {
  const [current, setCurrent] = useState(0);
  const items = [foto1, foto2];

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [items.length]);

  const prev = () => setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full overflow-hidden group">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-72 md:h-[26rem] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Botões */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2
                   bg-white/80 text-gray-800 w-10 h-10 rounded-full
                   flex items-center justify-center text-xl font-bold
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200
                   hover:bg-white shadow-lg"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2
                   bg-white/80 text-gray-800 w-10 h-10 rounded-full
                   flex items-center justify-center text-xl font-bold
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200
                   hover:bg-white shadow-lg"
      >
        ›
      </button>

      {/* Indicadores (dots) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              current === index ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
