import React, { useState } from "react";

const ImageCarousel = () => {
  const images = [
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/20/200/300",
    "https://picsum.photos/id/40/200/300",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prev = () => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  };
  const next = () => {
    setCurrentIndex((i) => (i >= images.length - 1 ? 0 : i + 1));
  };
  return (
    <div className="p-10 ">
      <img src={images[currentIndex]} alt={`image ${currentIndex}`} />
      <div className="flex gap-5 mt-6">
        <button
          className="border px-2 py-1 cursor-pointer active:scale-95"
          onClick={prev}
        >
          Prev
        </button>
        <button
          className="border px-2 py-1 cursor-pointer active:scale-95"
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
