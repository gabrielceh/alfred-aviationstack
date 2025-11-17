import { environments } from "@/config/environments";
import { ApiAirportResponse } from "@/core/types";
import { AirportResponse } from "@/modules/airports/infrastructure/models";

let cache: { data: ApiAirportResponse<AirportResponse>; expires: number } | null = null;

/**
 * GET handler para obtener la lista completa de aeropuertos desde la API externa.
 *
 * Esta función implementa un sistema de caché en memoria para evitar hacer múltiples
 * solicitudes a la API externa, la cual tiene un límite estricto de peticiones mensuales.
 *
 * - Si existe un caché válido (no expirado), devuelve los datos almacenados.
 * - Si el caché no existe o expiró, realiza la petición externa, guarda el resultado
 *   en memoria por 1 hora y luego lo devuelve.
 *
 * @async
 * @function GET
 * @returns {Promise<Response>} Respuesta JSON con los datos de aeropuertos.
 *
 * @example
 * // Ejemplo de respuesta exitosa
 * const res = await fetch("/api/airports/source");
 * const data = await res.json();
 *
 * @description
 * El caché se almacena únicamente en memoria del proceso actual. En entornos serverless
 * como Vercel, puede reiniciarse entre invocaciones, por lo que este mecanismo es adecuado
 * para entornos controlados como desarrollo.
 */

export async function GET() {
  const now = Date.now();

  // Si hay cache y no expiró → devolver
  if (cache && cache.expires > now) {
    console.log("cache hit");
    return Response.json(cache.data);
  }

  // Si no hay cache o ya expiró → llamar API externa
  const res = await fetch(
    `${environments.apiUrl}/airports?access_key=${environments.apiKey}&offset=0&limit=6711`
  );
  const data = await res.json();

  // Guardar cache por 1 hora
  cache = {
    data,
    expires: now + 60 * 60 * 1000 // 1 hora
  };

  return Response.json(data);
}
