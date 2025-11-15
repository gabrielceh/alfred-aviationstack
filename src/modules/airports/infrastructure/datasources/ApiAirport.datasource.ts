import { AxiosService } from "@/config/axios";
import { ApiAirportResponse, ApiResponse } from "@/core/types";
import { performApiRequest } from "@/core/utils";
import { AirportDataSource } from "@/modules/airports/domain/datasources";
import { Airport } from "@/modules/airports/domain/entities";

export class ApiAirportDataSource implements AirportDataSource{
  async search(query: string, options?: {offset: number, limit?: number}): Promise<ApiResponse<ApiAirportResponse | null>> {

      if(!query){
        return {
          message: 'No hay termino de búsqueda',
          status: "error",
          data: null
        };
      }

      const offset = options?.offset || 0;
      const limit = options?.limit || 10;

      const res = await performApiRequest<ApiAirportResponse>({
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
        data: res.data
      };
   
  }

  async getAirportById(id: string): Promise<ApiResponse<Airport | null>> {
    try {
      return {
        message: 'Operación realizada correctamente',
        status: "success",
        data: null
      };
    } catch (error) {
      return {
        message: error instanceof Error ? error.message : 'Error desconocido',
        status: "error",  
        data: null
      };
    }
  }
}