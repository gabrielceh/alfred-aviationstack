import { PaginationResponse } from "./PaginationResponse.interface";

export interface ApiAirportResponse<T> {
  pagination: PaginationResponse;
  data:   T[];
}