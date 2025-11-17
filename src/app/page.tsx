import clsx from "clsx";
import { GradientTitle } from "@/modules/shared/components";
import { SearchAirportForm } from "@/modules/airports/presentation/components";



export default function Home() {
  return (
    <main className={clsx("flex gap-12 flex-col items-center justify-center")}>
      
      <GradientTitle as="h1" className="text-7xl font-bold text-center">SkyConnect Explorer</GradientTitle>

      <SearchAirportForm className="w-5/12 flex flex-col gap-4 items-center"/>

    </main>
  );
}
