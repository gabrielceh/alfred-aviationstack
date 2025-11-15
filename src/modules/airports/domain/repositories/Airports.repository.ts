import { Airport } from "../entities";

/**
 * Define el contrato del repositorio encargado de manejar
 * las operaciones de acceso a aeropuertos dentro del dominio.
 *
 * A diferencia del `AirportDataSource`, el repositorio actúa como
 * una capa intermedia entre los casos de uso y las fuentes de datos.
 * Permite aplicar reglas de negocio, transformar entidades o combinar
 * múltiples fuentes si fuera necesario, manteniendo el dominio aislado
 * de detalles de infraestructura.
 */
export interface AirportRepository {
   /**
   * Realiza una búsqueda de aeropuertos cuyo nombre, código u otros
   * atributos coincidan con el texto proporcionado.
   *
   * @param query - Término de búsqueda a utilizar.
   *
   * @returns Una promesa que se resuelve con un arreglo de entidades
   *          `Airport` que coinciden con el criterio.
   */
  search: (query: string) => Promise<Airport[]>;

  /**
   * Obtiene un aeropuerto por su identificador único dentro del sistema.
   *
   * @param id - ID del aeropuerto a consultar.
   *
   * @returns Una promesa que se resuelve con la entidad `Airport`
   *          si existe, o `null` en caso de no encontrarse.
   */
  getAirportById: (id: string) => Promise<Airport |  null>;
}