import clsx from "clsx";

interface ErrorProps {
  /**
   * Clases adicionales para personalizar el estilo del contenedor.
   */
  className?: string;
  /**
   * Mensaje de error a mostrar debajo del título.
   * Si no se proporciona, solo se renderiza el título "Error".
   */
  message?: string;
   /**
   * Contenido adicional opcional, como botones, enlaces
   * o componentes personalizados.
   */
  children?: React.ReactNode;
}

/**
 * Componente genérico para mostrar mensajes de error.
 * Incluye un título principal "Error", un mensaje opcional,
 * y permite renderizar contenido adicional mediante `children`.
 *
 * @example Uso básico:
 * ```tsx
 * <Error message="Ocurrió un problema al cargar los datos." />
 * ```
 *
 * @example Con contenido adicional:
 * ```tsx
 * <Error message="No se pudo conectar al servidor.">
 *   <Button onClick={retry}>Reintentar</Button>
 * </Error>
 * ```
 *
 * @example Personalizando estilos:
 * ```tsx
 * <Error className="mt-8 text-red-500" />
 * ```
 *
 * @param props - Propiedades del componente, incluyendo mensaje y children.
 */
export function Error({className, message, children}: ErrorProps) {
  return (
    <div className={clsx("flex flex-col gap-4 items-center justify-center", className)}>
      <span className="text-4xl font-bold">Error</span>
      {message && <span className="text-sm text-center">{message}</span>}
      {children}
    </div>
  )
}
