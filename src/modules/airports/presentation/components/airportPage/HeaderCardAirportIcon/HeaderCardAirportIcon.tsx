import { GradientTitle } from "@/modules/shared/components";
import { ReactNode } from "react";

interface HeaderCardAirportIconProps {
  text: string;
  icon: ReactNode;
}

export function HeaderCardAirportIcon({text, icon}:HeaderCardAirportIconProps) {
  return (
    <header className="flex items-center gap-4">
      {icon}
      <GradientTitle as="span" className="text-3xl font-extrabold">{text}</GradientTitle>
    </header>
  )
}
