import clsx from "clsx";
import {JSX, ReactNode } from "react";

interface GradientTitleProps {
   /**
   * Contenido interno del título.  
   * Puede ser texto, elementos JSX o cualquier ReactNode.
   */
  children: ReactNode;
  
  /**
   * Elemento HTML a renderizar.  
   * Por defecto es `h1`.  
   * Útil cuando necesitas variar semántica (h2, p, span, etc).
   */
  as?: keyof JSX.IntrinsicElements; // h1 | h2 | h3 | p | span...
  /**
   * Clases adicionales para personalizar el estilo del componente.
   */
  className?: string;
   /**
   * Clase Tailwind para el inicio del gradiente.  
   * Por defecto: `from-dark-blue`.
   */
  gradientFrom?: string;
    /**
   * Clase Tailwind para el final del gradiente.  
   * Por defecto: `to-light-blue`.
   */
  gradientTo?: string;
};


/**
 * Componente que renderiza un texto con un gradiente horizontal,
 * usando el clip de background para colorear el texto.
 *
 * @example Uso básico:
 * ```tsx
 * <GradientTitle>Hola Mundo</GradientTitle>
 * ```
 *
 * @example Cambiando el elemento HTML y colores del gradiente:
 * ```tsx
 * <GradientTitle as="h2" gradientFrom="from-red-500" gradientTo="to-yellow-500">
 *   Subtítulo Importante
 * </GradientTitle>
 * ```
 *
 * @example Añadiendo clases personalizadas:
 * ```tsx
 * <GradientTitle className="text-4xl font-bold">
 *   Dashboard
 * </GradientTitle>
 * ```
 */
export function GradientTitle ({
  children,
  as: Tag = "h1",
  className = "",
  gradientFrom = "from-dark-blue",
  gradientTo = "to-light-blue",
}:GradientTitleProps) {
  return (
    <Tag
      className={clsx("bg-linear-to-r", gradientFrom, gradientTo, "bg-clip-text text-transparent tracking-tight", className)}
    >
      {children}
    </Tag>
  );
};
