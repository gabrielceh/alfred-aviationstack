
/**
 * Representa la entidad de dominio para un aeropuerto.
 *
 * Esta interfaz define la estructura de los datos que describen
 * un aeropuerto dentro del sistema.
 */
export interface Airport {
   /**
   * Identificador único interno del aeropuerto.
   */
  id: string;

  /**
   * Diferencia horaria respecto al GMT (Greenwich Mean Time).
   * Puede ser nulo si la información no está disponible.
   */
  gmt: string | null;

  /**
   * Identificador del aeropuerto según la fuente de datos original.
   */
  airport_id: string;

  /**
   * Código IATA del aeropuerto (3 letras, comúnmente usado en tickets y vuelos).
   */
  iata_code: string;

  /**
   * Código IATA de la ciudad en la que se ubica el aeropuerto.
   * Puede ser nulo si no aplica.
   */
  city_iata_code: string | null;

  /**
   * Código ICAO del aeropuerto (4 letras, usado por control aéreo).
   * Puede ser nulo.
   */
  icao_code: string | null;

  /**
   * Código ISO-3166 del país donde se encuentra el aeropuerto.
   * Puede ser nulo.
   */
  country_iso2: string | null;

  /**
   * Identificador del aeropuerto según GeoNames.
   * Puede ser nulo si no se dispone de esta fuente.
   */
  geoname_id: string | null;

  /**
   * Latitud del aeropuerto en formato de texto.
   * Puede ser nulo.
   */
  latitude: string | null;

  /**
   * Longitud del aeropuerto en formato de texto.
   * Puede ser nulo.
   */
  longitude: string | null;

  /**
   * Nombre oficial del aeropuerto.
   */
  airport_name: string;

  /**
   * Nombre del país donde está ubicado el aeropuerto.
   * Puede ser nulo.
   */
  country_name: string | null;

  /**
   * Número telefónico de contacto del aeropuerto (si existe).
   */
  phone_number: string | null;

  /**
   * Zona horaria del aeropuerto (por ejemplo: "America/Bogota").
   * Puede ser nula si no está definida.
   */
  timezone: string | null;
}