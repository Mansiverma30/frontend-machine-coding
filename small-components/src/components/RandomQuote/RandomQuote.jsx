import React, { useState } from "react";

const RandomQuote = () => {
  const [quoteGen, setQuoteGen] = useState(null);
  const quote = [
    "Use cursor-pointer.",
    "Frontend Engineer loading...",
    "Virat century incoming.",
    "Coffee first, bugs later.",
    "If it works, don't touch it.",
    "Console.log is my therapist.",
    "One more component won't hurt.",
    "Tailwind CSS supremacy.",
    "Today we debug, tomorrow we conquer.",
    "README bhi likhni hai.",
    "It's not a bug, it's a feature.",
    "Machine coding > scrolling Instagram.",
    "Just one more hover effect.",
    "Google gave hint, I did the work.",
    "My code works. I won't ask why.",
    "Ctrl + S is my favorite shortcut.",
    "Frontend is my escape mechanism.",
    "When in doubt, console.log it.",
    "Ship first, optimize later.",
    "The root canal hurts less than CSS sometimes.",
  ];
  const click = (start, end) => {
    let random = Math.floor(Math.random() * (end - start + 1)) + start; //Googled
    setQuoteGen(random);
  };
  return (
    <div className="p-10">
      <button
        className="border rounded px-2 py-0.5 cursor-pointer active:scale-95"
        onClick={() => click(0, quote.length - 1)}
      >
        Click for Some Quote
      </button>
      {quoteGen !== null && (
        <div className="flex gap-2 mt-2">
          <p>Quote number {quoteGen + 1}:</p>
          <p>{quote[quoteGen]}</p>
        </div>
      )}
    </div>
  );
};

export default RandomQuote;
