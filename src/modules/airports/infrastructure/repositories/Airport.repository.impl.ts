import { AirportRepository } from "@/modules/airports/domain/repositories/Airports.repository";
import { AirportDataSource } from "../../domain/datasources";
import { Airport } from "../../domain/entities";
import { ApiAirportResponse, ApiResponse } from "@/core/types";

/**
 * Implementación concreta del `AirportRepository` que utiliza un
 * `AirportDataSource` para obtener los datos.
 *
 * Esta clase actúa como puente entre el dominio (casos de uso) y las
 * fuentes de datos reales. Permite delegar al datasource la obtención
 * de la información sin exponer detalles de infraestructura en el
 * dominio.
 *
 * Responsabilidades:
 * - Implementar el contrato del repositorio.
 * - Delegar las operaciones al datasource.
 * - (Opcionalmente) Aplicar reglas de negocio o transformar datos
 *   antes de devolverlos al dominio.
 */
export class AirportRepositoryImpl implements AirportRepository {
  /**
   * Fuente de datos desde la cual este repositorio obtiene la
   * información de aeropuertos.
   */
  private datasource: AirportDataSource;

  constructor(datasource: AirportDataSource) {
    this.datasource = datasource;
  }

  /**
   * Delegación directa de la búsqueda de aeropuertos al datasource.
   *
   * @param query - Texto de búsqueda a comparar contra los datos
   *                del aeropuerto.
   * @param offset - Índice de inicio de la página.
   * @param limit - Cantidad de elementos por página.
   *
   * @returns Una promesa que se resuelve con un arreglo de
   *          aeropuertos que coinciden con el término.
   */
  async search(query: string, options?: {offset: number, limit?: number}): Promise<ApiResponse<ApiAirportResponse | null>> {
    return this.datasource.search(query, options);
  }


  /**
   * Obtiene un aeropuerto por su ID, delegando la operación al datasource.
   *
   * @param id - Identificador del aeropuerto.
   *
   * @returns Una promesa que se resuelve con la entidad `Airport`
   *          correspondiente, o `null` si no se encuentra.
   */
  async getAirportById(id: string): Promise<ApiResponse<Airport | null>> {
    return this.datasource.getAirportById(id);
  }

}