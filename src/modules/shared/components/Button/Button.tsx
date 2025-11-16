import clsx from "clsx";
import { ComponentPropsWithRef } from "react";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  /**
   * Clases adicionales para personalizar estilos del botón.
   * Se combinan con las clases internas mediante `clsx`.
   */
  className?: string;
}

/**
 * Botón estilizado con gradiente horizontal y bordes redondeados.
 * Acepta todas las propiedades nativas de un `<button>`, ya que
 * extiende `ComponentPropsWithRef<"button">`.
 *
 * @example Uso básico:
 * ```tsx
 * <Button>Guardar</Button>
 * ```
 *
 * @example Con clases personalizadas:
 * ```tsx
 * <Button className="w-full mt-4">Enviar</Button>
 * ```
 *
 * @example Con atributos nativos del botón:
 * ```tsx
 * <Button disabled onClick={handleClick}>
 *   Procesando...
 * </Button>
 * ```
 *
 * @param props - Todas las propiedades del botón, incluyendo `children` y `className`.
 */
export  function Button({className, children, ref, ...props}: ButtonProps) {
  return (
    <button
    ref={ref} 
    className={
      clsx(
        className, "cursor-pointer disabled:cursor-not-allowed text-center bg-linear-to-r from-dark-blue/80 to-light-blue/80 text-white px-8 py-1.5 rounded-xl border-2 border-white"
    )}
    {...props}
    >
      {children}
    </button>
  )
}
