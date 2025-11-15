import { Airport } from "@/modules/airports/domain/entities";
import { PaginationResponse } from "./PaginationResponse.interface";

export interface ApiResponse {
  pagination: PaginationResponse;
  data: Airport[];
}