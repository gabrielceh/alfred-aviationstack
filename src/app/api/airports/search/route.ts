import { NextRequest, NextResponse } from "next/server";
import { ApiAirportResponse, ApiResponse } from "@/core/types";
import { AIRPORTS_DATA } from "@/modules/airports/infrastructure/mocks";
import { AirportResponse } from "@/modules/airports/infrastructure/models";
import { getAirportsData } from "../utils/getAirportData";


// const airportsData = [...AIRPORTS_DATA];

export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse<ApiAirportResponse<AirportResponse>>>> {
  try {
    const { searchParams } = new URL(request.url);
    
    // Obtener parámetros de búsqueda
    const search = searchParams.get('search') || '';
    const offset = parseInt(searchParams.get('offset') || '0');
    const limit = parseInt(searchParams.get('limit') || '10');

    const airportsData = await getAirportsData();

    // Validar parámetros
    if (offset < 0 || limit < 1 || limit > 100) {
      return NextResponse.json(
        { 
          status: "error",
          message: 'Parámetros de búsqueda inválidos',
          data: null
        },
        {status: 400}
      );
    }

    // Filtrar aeropuertos por búsqueda
    let filteredAirports = airportsData.data;

    if (search) {
      const searchLower = search.toLowerCase().trim();
      
      filteredAirports = airportsData.data.filter((airport) => {
        const nameMatch = airport.airport_name?.toLowerCase().includes(searchLower);
        const iataMatch = airport.iata_code?.toLowerCase().includes(searchLower);
        const cityMatch = airport.city_iata_code?.toLowerCase().includes(searchLower);
        
        return nameMatch || iataMatch || cityMatch;
      });
    }

    // Calcular total de resultados
    const total = filteredAirports.length;

    // Aplicar paginación
    const paginatedAirports = filteredAirports.slice(offset, offset + limit);

    // Preparar respuesta
    const dataResponse: ApiAirportResponse<AirportResponse> = {
      pagination: {
        offset,
        limit,
        count: paginatedAirports.length,
        total,
      },
      data: paginatedAirports
    };
    
    const response: ApiResponse<ApiAirportResponse<AirportResponse>> = {
      status: "success",
      message: "Operación realizada correctamente",
      data: dataResponse
    };

    return NextResponse.json(response, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
      }
    });

  } catch (error) {
    console.error('Error in airports API:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { 
        message: errorMessage,
        status: "error",
        data:null
      },
      { status: 500 }
    );
  }
}