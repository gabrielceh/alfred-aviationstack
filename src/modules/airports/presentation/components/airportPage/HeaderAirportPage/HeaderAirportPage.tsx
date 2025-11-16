import { GradientTitle } from "@/modules/shared/components";
import clsx from "clsx";

interface HeaderAirportPageProps {
  airportName: string;
  className?: string;
}

export  function HeaderAirportPage({airportName, className}:HeaderAirportPageProps) {
  return (
    <header className={clsx("flex items-center py-4 px-8 w-full text-center", className)}>
      <GradientTitle as="h1" className="font-bold text-6xl w-full">{airportName}</GradientTitle>
    </header>
  )
}
