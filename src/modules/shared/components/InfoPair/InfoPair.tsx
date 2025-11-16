interface InfoPairProps {
  label: string;
  value: string;
}

export function InfoPair({label, value}:InfoPairProps) {
  return (
    <p className="text-xl text-white">
      <span className="font-bold">{label} </span>
      <span className="font-normal">{value}</span>
    </p>
  )
}
