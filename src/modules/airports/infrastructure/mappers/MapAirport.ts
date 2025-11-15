import { Airport } from "../../domain/entities";
import { AirportResponse } from "../models";

export class MapAirport {
  static fromJsonToEntity(airport: AirportResponse): Airport {
    return {
      id: airport.id,
      gmt: airport.gmt,
      airportId: airport.airport_id,
      iataCode: airport.iata_code,
      cityIataCode: airport.city_iata_code,
      icaoCode: airport.icao_code,
      countryIso2: airport.country_iso2,
      geonameId: airport.geoname_id,
      latitude: airport.latitude,
      longitude: airport.longitude,
      airportName: airport.airport_name,
      countryName: airport.country_name,
      phoneNumber: airport.phone_number,
      timezone: airport.timezone,
    };
  }
}