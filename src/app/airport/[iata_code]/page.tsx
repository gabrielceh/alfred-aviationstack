import { environments } from "@/config/environments";
import { MapAirport } from "@/modules/airports/infrastructure/mappers";
import { AirportContainer, HeaderAirportPage } from "@/modules/airports/presentation/components";
import { Metadata } from "next";
import { notFound } from "next/navigation";


interface AirportPageProps {
  params: Promise<{
      iata_code: string;
  }>;
}



export default async function AirportPage({params}:AirportPageProps) {
  const { iata_code } = await params;
  const res = await fetch(`${environments.serverUrl}/api/airports/airport/${iata_code}`);

  if (!res.ok) return notFound();

  const data = await res.json();

  if (!data?.data) return notFound();

  const airport = MapAirport.fromJsonToEntity(data.data);

  return (
    <div>
      <HeaderAirportPage airportName={airport.airportName}/>

      <AirportContainer airport={airport}/>
    </div>
  )
}
