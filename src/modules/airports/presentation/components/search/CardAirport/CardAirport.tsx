import { Airport } from "@/modules/airports/domain/entities";
import { GradientTitle } from "@/modules/shared/components";
import Image from "next/image";
import plainIcon from "../../../../../../../public/images/avion-icon.png";
import { CardLayout } from "@/modules/airports/presentation/layout";
import Link from "next/link";

interface CardAirportProps {
  airport: Airport;
}


export  function CardAirport({airport}:CardAirportProps) {
  return (
    <CardLayout>
      <Link href={`/airport/${airport.iataCode}`}>
        <div className="w-full h-full flex flex-col justify-between relative z-10">
          <div>
            <header className="flex justify-between items-center">
              <h3 className="font-bold text-lg">{airport.airportName}</h3>
              <Image src={plainIcon.src} alt="Flag" width={40} height={40}/>
            </header>
            <p>
              {airport.cityIataCode}, {airport.countryName}
            </p>
          </div>
          <footer>
            <GradientTitle as="span" className="text-2xl font-bold">{airport.iataCode}</GradientTitle>
          </footer>
        </div>
      </Link>
    </CardLayout>
  )
}
