"use client";

import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  offset: number;
  limit: number;
  total: number;
}

export function Pagination({ offset, limit, total }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  const goToPage = (page: number) => {
    const newOffset = (page - 1) * limit;

    const params = new URLSearchParams(searchParams.toString());
    params.set("offset", newOffset.toString());
    params.set("limit", limit.toString());

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2 mt-4">
      {/* Prev */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-800 text-white rounded disabled:opacity-20 cursor-pointer"
      >
        ←
      </button>

      {/* Numeric pages */}
      <div className="flex gap-1">
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={clsx("px-3 py-1 rounded text-white] cursor-pointer", 
                isActive ? "bg-slate-800 text-white" : "bg-slate-500"
              )}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-800 text-white rounded disabled:opacity-40 cursor-pointer"
      >
        →
      </button>
    </div>
  );
}
