import { Airport } from "@/modules/airports/domain/entities";
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
   * @param query - Texto a buscar (puede ser nombre, IATA, ciudad, etc.)
   *
   * @returns Una promesa que se resuelve con un arreglo de aeropuertos
   *          que coinciden con el criterio.
   */
  async execute(query: string): Promise<Airport[]> {
    return this.repository.search(query);
  }
}