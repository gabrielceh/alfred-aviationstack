"use client";

import dynamic from "next/dynamic";

import { Airport } from "@/modules/airports/domain/entities";
import { CardLayout } from "../../../layout";
import { HeaderCardAirportIcon } from "../HeaderCardAirportIcon/HeaderCardAirportIcon";
import { MapPointIcon } from "@/assets/icons";
import { InfoPair } from "@/modules/shared/components";


const Map = dynamic(() => import("@/modules/shared/components/Map/Map"), {
  ssr: false,
  loading: () => <p>Cargando mapa...</p>,
});

interface AirportLocationProps {
    airport: Airport;
  }
  
export function AirportLocationCard({airport}:AirportLocationProps) {

  return (
    <div className="flex flex-col gap-12">
      <CardLayout className="flex flex-col gap-8">
        <HeaderCardAirportIcon text="Ubicación" icon={<MapPointIcon width={32} height={32}/>}/>
        <section className="flex flex-col gap-4">
          <InfoPair label="Latitud:" value={airport.latitude || 'No disponible'}/>
          <InfoPair label="Longitud:" value={airport.longitude || 'No disponible'}/>
          <InfoPair label="ID Geoname:" value={airport.geonameId || 'No disponible'}/>
        </section>
      </CardLayout>

      {airport.latitude && airport.longitude && <div className="h-[500px]">
        <Map position={[Number(airport.latitude), Number(airport.longitude)]} zoom={14} tooltipLabel={`${airport.iataCode} - ${airport.airportName}`}/>
      </div>}
    </div>
  )
}
