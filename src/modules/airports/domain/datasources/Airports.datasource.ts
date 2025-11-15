import { Airport } from "../entities";

/**
 * Representa la definición de un origen de datos (Data Source) para
 * obtener información relacionada con aeropuertos.
 *
 * Esta interfaz permite desacoplar la lógica de acceso a datos del
 * resto de la aplicación, facilitando el cumplimiento de principios
 * como la Inversión de Dependencias dentro de una arquitectura
 * hexagonal o limpia.
 */
export interface AirportDataSource {
   /**
   * Busca aeropuertos cuyo nombre, código u otros campos coincidan
   * con el término proporcionado.
   *
   * @param query - Texto de búsqueda a comparar contra los datos
   *                del aeropuerto.
   *
   * @returns Una promesa que se resuelve en un arreglo de objetos
   *          `Airport` que cumplen con el criterio de búsqueda.
   */
  search: (query: string) => Promise<Airport[]>;
  
   /**
   * Obtiene un aeropuerto específico por su identificador único.
   *
   * @param id - Identificador del aeropuerto.
   *
   * @returns Una promesa que se resuelve en un objeto `Airport`
   *          si se encuentra, o `null` en caso contrario.
   */
  getAirportById: (id: string) => Promise<Airport |  null>;
}