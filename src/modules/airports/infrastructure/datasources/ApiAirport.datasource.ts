import { ApiAirportResponse, ApiResponse } from "@/core/types";
import { performApiRequest } from "@/core/utils";
import { AirportDataSource } from "@/modules/airports/domain/datasources";
import { Airport } from "@/modules/airports/domain/entities";
import { AirportResponse } from "../models";
import { MapAirport } from "../mappers";

export class ApiAirportDataSource implements AirportDataSource{
  async search(query: string, options?: {offset: number, limit?: number}): Promise<ApiResponse<ApiAirportResponse<Airport> | null>> {

      if(!query){
        return {
          message: 'No hay termino de búsqueda',
          status: "error",
          data: null
        };
      }

      const offset = options?.offset || 0;
      const limit = options?.limit || 10;

      const res = await performApiRequest<ApiAirportResponse<AirportResponse>>({
        path: `/search?search=${query}&offset=${offset}&limit=${limit}`,
        method: 'get',
        errorMessage: 'Error al buscar aeropuertos'
      });

      if(!res.data){
        throw new Error(res.message);
      }

      return {
        message: 'Operación realizada correctamente',
        status: "success",
        data: {
          pagination: res.data.pagination,
          data: res.data.data.map(MapAirport.fromJsonToEntity)
        }
      };
   
  }

  async getAirportById(id: string): Promise<ApiResponse<Airport | null>> {
    if(!id){
        return {
          message: 'Sin id',
          status: "error",
          data: null
        };
      }

      const res = await performApiRequest<AirportResponse>({
        path: `/airport/${id}`,
        method: 'get',
        errorMessage: 'Error al buscar aeropuertos'
      });

      if(!res.data){
        throw new Error(res.message);
      }

      return {
        message: 'Operación realizada correctamente',
        status: "success",
        data: MapAirport.fromJsonToEntity(res.data)
        
      };
  }
}