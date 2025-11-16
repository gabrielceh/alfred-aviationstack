import { ApiResponse } from "@/core/types";;
import { AIRPORTS_DATA } from "@/modules/airports/infrastructure/mocks";
import { AirportResponse } from "@/modules/airports/infrastructure/models";
import { NextRequest, NextResponse } from "next/server";

const airportsData = [...AIRPORTS_DATA];

export async function GET(
  _request: NextRequest, 
  { params }: { params: Promise<{ iata_code: string }>}
): Promise<NextResponse<ApiResponse<AirportResponse |  null>>> {

  try {
    const { iata_code } = await params;

    const airport = airportsData.find((airport) => airport.iata_code === iata_code);

    if(!airport) return NextResponse.json(
      { 
        status: "error",
        message: '⚠️Aeropuerto no encontrado',
        data: null
      },
      {status: 404}
    );

    return NextResponse.json(
      { 
        status: "success",
        message: 'Airport found',
        data: airport
      },
      {status: 200}
    );

  } catch (error) {

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