"use client";

import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  /**
   * Índice del primer elemento de la página actual.
   * Generalmente recibido desde la API.
   */
  offset: number;

  /**
   * Número máximo de elementos por página.
   */
  limit: number;

  /**
   * Total de elementos disponibles.
   */
  total: number;
}

/**
 * Componente de paginación basado en `offset` y `limit`, compatible con Next.js 13+ (App Router).
 * Actualiza automáticamente la URL mediante `router.push` y mantiene los parámetros existentes.
 *
 * Renderiza:
 * - Botón **Anterior**
 * - Botones numéricos para cada página
 * - Botón **Siguiente**
 *
 * ##Cómo calcula la página actual
 * ```ts
 * currentPage = Math.floor(offset / limit) + 1
 * ```
 *
 * ## Cómo actualiza la URL
 * - Usa `URLSearchParams` para no perder otros parámetros de búsqueda.
 * - Actualiza `offset` y `limit`.
 * - Navega mediante `router.push`.
 *
 * ## Ejemplo de uso:
 * ```tsx
 * <Pagination offset={0} limit={10} total={87} />
 * ```
 *
 * @param props - Propiedades necesarias para calcular la paginación.
 */
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
        className="px-3 py-1 bg-dark-blue text-white rounded disabled:opacity-50 cursor-pointer"
      >
        Anterior
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
              className={clsx("px-3 py-1 rounded text-white cursor-pointer", 
                isActive ? "bg-light-blue" : "bg-dark-blue" 
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
        className="px-3 py-1 bg-dark-blue text-white rounded disabled:opacity-40 cursor-pointer"
      >
        Siguiente
      </button>
    </div>
  );
}
