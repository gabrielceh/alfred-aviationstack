import { Airport } from "@/modules/airports/domain/entities";
import { AirportRepository } from "@/modules/airports/domain/repositories/Airports.repository";

/**
 * Caso de uso encargado de obtener un aeropuerto por su ID.
 *
 * En una arquitectura limpia/hexagonal, los casos de uso representan
 * la lógica de aplicación y orquestan las operaciones necesarias para
 * cumplir un requerimiento del negocio, sin depender de detalles de
 * infraestructura.
 */
export class GetAirportByIdUsecase {
  /**
   * Repositorio utilizado para acceder a los datos de aeropuertos.
   */
  private repository: AirportRepository;

  constructor(repository: AirportRepository) {
    this.repository = repository;
  }

  /**
   * Ejecuta el caso de uso obteniendo el aeropuerto correspondiente
   * al identificador proporcionado.
   *
   * @param id - Identificador del aeropuerto que se desea obtener.
   *
   * @returns Una promesa que se resuelve con la entidad `Airport` si
   *          existe, o `null` si no se encuentra.
   */
  async execute(id: string): Promise<Airport | null> {
    return this.repository.getAirportById(id);
  }
}