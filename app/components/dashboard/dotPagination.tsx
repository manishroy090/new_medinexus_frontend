"use client";
import { useEffect } from "react";

interface Values {
  currentPage: number;
  limit: number;
  data: number;
  length: string;
  setData: (data: number) => void;
  setCurrentPage: (data: number) => void;
  slice: (data: number) => void;
  // length: (data: number) => void;
}

const DotPagination = (props: Values) => {
  useEffect(() => {
    const start = (props.currentPage - 1) * props.limit;
    props.setData(props.data.slice(start, start + props.limit));
  }, [props.currentPage]);

  return (
    <div className="flex justify-center gap-2 fixed bottom-6">
      {Array.from(
        { length: Math.ceil(props.data.length / props.limit) },
        (_, i) => (
          <button
            key={i}
            onClick={() => props.setCurrentPage(i + 1)}
            className={`h-3 w-3 rounded-full ${
              props.currentPage === i + 1 ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ),
      )}
    </div>
  );
};

export default DotPagination;
