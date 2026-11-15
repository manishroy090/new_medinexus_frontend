"use client";
import { useEffect } from "react";

interface Values {
  data: number[];
  limit: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  setData: (data: number[]) => void;
  slice?: (data: number[]) => void;
}

const DotPagination = (props: Values) => {
  useEffect(() => {
    const start = (props.currentPage - 1) * props.limit;
    props.setData(props.data.slice(start, start + props.limit));
  }, [props.currentPage, props.data, props.limit, props.setData]);

  return (
    <div className="w-full flex justify-center items-center gap-2 mt-4">
      {Array.from(
        { length: Math.ceil(props.data.length / props.limit) },
        (_, i) => (
          <button
            key={i}
            onClick={() => props.setCurrentPage(i + 1)}
            aria-label={`Go to page ${i + 1}`}
            className={`h-3 w-3 rounded-full transition-colors duration-200 ${
              props.currentPage === i + 1 ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ),
      )}
    </div>
  );
};

export default DotPagination;
