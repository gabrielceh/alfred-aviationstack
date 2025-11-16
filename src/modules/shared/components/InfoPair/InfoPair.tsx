interface InfoPairProps {
  label: string;
  value: string;
}

/**
 * Muestra un par de información compuesto por un label
 * en negrita y un valor en estilo normal.
 *
 * @example
 * <InfoPair label="Email:" value="usuario@example.com" />
 *
 * @param label - Texto descriptivo del valor
 * @param value - Información asociada al label
 */
export function InfoPair({label, value}:InfoPairProps) {
  return (
    <p className="text-xl">
      <span className="font-bold">{label} </span>
      <span className="font-normal">{value}</span>
    </p>
  )
}
