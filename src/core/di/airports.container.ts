import { GetAirportByIdUsecase, SearchAirportUsecase } from "@/modules/airports/application/usecases";
import { ApiAirportDataSource } from "@/modules/airports/infrastructure/datasources";
import { AirportRepositoryImpl } from "@/modules/airports/infrastructure/repositories";

/**
 * Instancia concreta del datasource encargado de obtener la
 * información de aeropuertos desde la API.
 */
const apiAirportDatasource = new ApiAirportDataSource();

/**
 * Implementación del repositorio que utiliza el datasource
 * para acceder a los datos de aeropuertos.
 */
const airportRepository = new AirportRepositoryImpl(apiAirportDatasource);


/**
 * Caso de uso para buscar aeropuertos según un término dado.
 */
const searchAirportUsecase = new SearchAirportUsecase(airportRepository);
/**
 * Caso de uso para obtener un aeropuerto por su identificador.
 */
const getAirportByIdUsecase = new GetAirportByIdUsecase(airportRepository);

/**
 * Contenedor de dependencias del módulo de aeropuertos.
 *
 * Este objeto centraliza la creación e inyección de dependencias,
 * facilitando:
 * - la organización del módulo,
 * - el reemplazo de implementaciones (por ejemplo en tests),
 * - y el desacoplamiento entre capas.
 *
 * Exponer las instancias como `as const` garantiza que sus tipos sean
 * inmutables y precisos.
 */
export const airportsContainer = {
  usecases:{
    searchAirport: searchAirportUsecase,
    getAirportById: getAirportByIdUsecase,
  },
  datasources: {
    apiAirportDatasource,
  },
  repositories: {
    airportRepository,
  }

} as const;