import { environments } from "@/config/environments";
import { ApiAirportResponse } from "@/core/types";
import { AirportResponse } from "@/modules/airports/infrastructure/models";


/**
 * Obtiene la lista completa de aeropuertos desde el endpoint interno `/api/airports/source`.
 *
 * Este método siempre realiza la petición sin utilizar la caché del navegador (`cache: "no-store"`),
 * ya que el propio endpoint interno implementa su propia capa de caché en memoria.
 *
 * @async
 * @function getAirportsData
 * @returns {Promise<ApiAirportResponse<AirportResponse>>} Datos de aeropuertos provenientes de la API interna.
 *
 * @example
 * const airports = await getAirportsData();
 * console.log(airports.data);
 *
 * @description
 * Esta función centraliza el acceso al origen de datos de aeropuertos dentro del sistema,
 * permitiendo que otros endpoints (como `/search` o `/[id]`) consuman los datos sin tener
 * que llamar directamente a la API externa ni duplicar lógica.
 */
export async function getAirportsData():Promise<ApiAirportResponse<AirportResponse>> {
  const res = await fetch(`${environments.serverUrl}/api/airports/source`, {
    cache: "no-store",
  });
  return res.json();
}
