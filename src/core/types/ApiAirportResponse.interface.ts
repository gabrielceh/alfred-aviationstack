import { Airport } from "@/modules/airports/domain/entities";
import { PaginationResponse } from "./PaginationResponse.interface";

export interface ApiAirportResponse {
  pagination: PaginationResponse;
  data: Airport[];
}