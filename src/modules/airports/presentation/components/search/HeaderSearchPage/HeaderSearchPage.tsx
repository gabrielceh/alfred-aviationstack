import { GradientTitle } from "@/modules/shared/components";
import { SearchAirportForm } from "../../SearchAirportForm/SearchAirportForm";
import Link from "next/link";


export  function HeaderSearchPage() {
  return (
    <header className="flex items-center py-4 justify-between gap-4 flex-col lg:flex-row">
      <Link href="/">
        <GradientTitle as="h1" className="text-4xl font-bold text-center">SkyConnect Explorer</GradientTitle>
      </Link>
      <SearchAirportForm className="flex items-center w-full gap-3 sm:gap-8 lg:w-8/12 flex-col sm:flex-row"/>
    </header>
  )
}
