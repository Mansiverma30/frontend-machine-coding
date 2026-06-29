import React, { useState } from "react";

const Pagination = () => {
  const list = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "TypeScript",
    "Redux",
    "Node",
    "Express",
    "MongoDB",
  ];
  const [page, setPage] = useState(0);

  const clickNext = () => {
    setPage((p) => p + 1);
  };
  const clickPrev = () => {
    setPage((p) => p - 1);
  };
  let itemsPerPage = 3;
  let totalPages = Math.ceil(list.length / itemsPerPage);
  let start = page * itemsPerPage;
  let end = start + itemsPerPage;

  return (
    <div className="p-10">
      {list.slice(start, end).map((l, i) => (
        <p key={i}>{l}</p>
      ))}
      <div className="flex gap-4 mt-4">
        <button
          className="border px-2 py-0.5 cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={clickPrev}
          disabled={page === 0}
        >
          Prev
        </button>
        <button
          className="border px-2 py-0.5 cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={clickNext}
          disabled={page === totalPages - 1}
        >
          Next
        </button>
      </div>
      <p className="mt-5">
        Page: {page + 1} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
