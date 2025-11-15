import { ApiAirportResponse, ApiResponse } from "@/core/types";
import { AirportRepository } from "@/modules/airports/domain/repositories/Airports.repository";

/**
 * Caso de uso responsable de realizar la búsqueda de aeropuertos a
 * partir de un término dado.
 *
 * Este caso de uso encapsula la lógica necesaria para ejecutar
 * la operación, delegando la consulta al repositorio sin exponer
 * detalles de infraestructura.
 *
 * En el contexto de arquitectura limpia, los casos de uso definen
 * la lógica de aplicación y coordinan la interacción entre el dominio
 * y las capas externas.
 */
export class SearchAirportUsecase  {
  /**
   * Repositorio que provee las operaciones de consulta de aeropuertos.
  */
  private repository: AirportRepository;

  constructor(repository: AirportRepository) {
    this.repository = repository;
  }

  /**
   * Ejecuta la operación de búsqueda de aeropuertos según el término
   * proporcionado.
   *
   * @param query - Texto de búsqueda a comparar contra los datos
   *                del aeropuerto.
   * @param offset - Índice de inicio de la página.
   * @param limit - Cantidad de elementos por página.
   *
   * @returns Una promesa que se resuelve con un arreglo de aeropuertos
   *          que coinciden con el criterio.
   */
  async execute(query: string, options?: {offset: number, limit?: number}): Promise<ApiResponse<ApiAirportResponse | null>> {
    return this.repository.search(query, options);
  }
}