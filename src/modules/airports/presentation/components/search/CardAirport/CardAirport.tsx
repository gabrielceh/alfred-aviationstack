import { Airport } from "@/modules/airports/domain/entities";

interface CardAirportProps {
  airport: Airport;
}


export  function CardAirport({airport}:CardAirportProps) {
  return (
    <div>CardAirport</div>
  )
}
