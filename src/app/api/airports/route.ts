import { NextRequest, NextResponse } from "next/server";
import { ApiResponse, ErrorResponse } from "@/core/types";
import { AIRPORTS_DATA } from "@/modules/airports/infrastructure/mocks";


const airportsData = [...AIRPORTS_DATA];

export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse | ErrorResponse>> {
  try {
    const { searchParams } = new URL(request.url);
    
    // Obtener parámetros de búsqueda
    const search = searchParams.get('search') || '';
    const offset = parseInt(searchParams.get('offset') || '0');
    const limit = parseInt(searchParams.get('limit') || '10');

    // Validar parámetros
    if (offset < 0 || limit < 1 || limit > 100) {
      return NextResponse.json(
        { 
          error: 'Invalid parameters',
          message: 'offset must be >= 0, limit must be between 1 and 100'
        },
        { status: 400 }
      );
    }

    // Filtrar aeropuertos por búsqueda
    let filteredAirports = airportsData;

    if (search) {
      const searchLower = search.toLowerCase().trim();
      
      filteredAirports = airportsData.filter((airport) => {
        const nameMatch = airport.airport_name?.toLowerCase().includes(searchLower);
        const iataMatch = airport.iata_code?.toLowerCase().includes(searchLower);
        const icaoMatch = airport.icao_code?.toLowerCase().includes(searchLower);
        const cityMatch = airport.city_iata_code?.toLowerCase().includes(searchLower);
        
        return nameMatch || iataMatch || icaoMatch || cityMatch;
      });
    }

    // Calcular total de resultados
    const total = filteredAirports.length;

    // Aplicar paginación
    const paginatedAirports = filteredAirports.slice(offset, offset + limit);

    // Preparar respuesta
    const response: ApiResponse = {
      pagination: {
        offset,
        limit,
        count: paginatedAirports.length,
        total,
      },
      data: paginatedAirports
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
        error: 'Internal server error',
        message: errorMessage 
      },
      { status: 500 }
    );
  }
}