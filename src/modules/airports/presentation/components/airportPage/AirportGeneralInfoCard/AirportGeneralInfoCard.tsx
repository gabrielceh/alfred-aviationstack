import { Airport } from "@/modules/airports/domain/entities";
import { CardLayout } from "../../../layout";
import { HeaderCardAirportIcon } from "../HeaderCardAirportIcon/HeaderCardAirportIcon";
import { InfoCircleIcon } from "@/assets/icons";
import { InfoPair } from "@/modules/shared/components";

interface AirportGeneralInfoProps {
  airport: Airport;
}

export function AirportGeneralInfoCard({airport}:AirportGeneralInfoProps) {
  return (
    <CardLayout className="flex flex-col gap-8">
      <HeaderCardAirportIcon text="Información general" icon={<InfoCircleIcon width={32} height={32}/>}/>

      <section className="flex flex-col gap-4">
        <InfoPair label="Códifo IATA:" value={airport.iataCode}/>
        <InfoPair label="Código ICAO:" value={airport.icaoCode || 'No disponible'}/>
        <InfoPair label="País:" value={airport.countryName || "No disponible"}/>
        <InfoPair label="Ciudad IATA:" value={airport.cityIataCode || "No disponible"}/>
        <InfoPair label="Teléfono:" value={airport.phoneNumber || 'No disponible'}/>

      </section>
    </CardLayout>
  )
}
