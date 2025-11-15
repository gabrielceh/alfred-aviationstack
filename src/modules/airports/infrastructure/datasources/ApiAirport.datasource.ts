import { AirportDataSource } from "@/modules/airports/domain/datasources";
import { Airport } from "../../domain/entities";

export class ApiAirportDataSource implements AirportDataSource{
  async search(query: string): Promise<Airport[]> {
    return [];
  }

  async getAirportById(id: string): Promise<Airport | null> {
    return null;
  }
}