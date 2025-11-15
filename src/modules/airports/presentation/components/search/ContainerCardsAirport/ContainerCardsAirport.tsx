"use client";
import {  useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Airport } from '@/modules/airports/domain/entities';
import { useSearchAirportQuert } from '@/modules/airports/presentation/hooks';

import { Error, Loader } from '@/modules/shared/components';
import { CardAirport } from '../CardAirport/CardAirport';

export function ContainerCardsAirport() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const offset = searchParams.get('offset') || '0';
  const limit = searchParams.get('limit') || '10';
  

  const queryAirport = useSearchAirportQuert({search: query, offset: parseInt(offset), limit: parseInt(limit)});

  const airports = useMemo(() => {
    if (queryAirport.data?.data?.data) {
      return queryAirport.data.data.data;
    }
    return [];
  }, [queryAirport.data]);

  const apiErrorMsg = useMemo(() => {
    if (!queryAirport.data?.data) {
      return queryAirport.data?.message || 'Error desconocido';
    }
    return null;
  }, [queryAirport.data]);
    

  if(queryAirport.isLoading) return <div className=' w-full h-full flex justify-center items-center'>
    <Loader/>
  </div>;

  if(queryAirport.isError) return <Error message={apiErrorMsg || ""}/>;


  return (
    <div>
      {
        airports.map((airport)=>(
          <CardAirport key={airport.id} airport={airport}/>
        ))
      }
    </div>
  )
}
