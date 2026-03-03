import { useState, useEffect } from "react";

interface CarouselProps {
  items: string[];
}

function CarouselSponsors({ items }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, [items.length]);

  const prev = () => setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full overflow-hidden group rounded-2xl shadow-xl">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 bg-white flex items-center justify-center p-6"
          >
            <img
              src={src}
              alt={`Apoiador ${index + 1}`}
              className="max-h-64 md:max-h-80 w-auto object-contain rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Botões */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2
                   bg-white text-emerald-700 w-10 h-10 rounded-full
                   flex items-center justify-center text-2xl font-bold
                   shadow-lg opacity-0 group-hover:opacity-100
                   transition-opacity duration-200 hover:bg-emerald-50"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2
                   bg-white text-emerald-700 w-10 h-10 rounded-full
                   flex items-center justify-center text-2xl font-bold
                   shadow-lg opacity-0 group-hover:opacity-100
                   transition-opacity duration-200 hover:bg-emerald-50"
      >
        ›
      </button>

      {/* Contador */}
      <div className="absolute bottom-3 right-4 bg-black/40 text-white text-xs px-3 py-1 rounded-full">
        {current + 1} / {items.length}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index ? "bg-emerald-500 w-5" : "bg-gray-300 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselSponsors;