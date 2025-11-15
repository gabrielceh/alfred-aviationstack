import { ContainerCardsAirport, HeaderSearchPage } from "@/modules/airports/presentation/components";

export default async function SearchPageProps() {


  return (
    <div className="flex flex-col w-full gap-16">
      <HeaderSearchPage/>

      <ContainerCardsAirport/>
    </div>
  )
}
