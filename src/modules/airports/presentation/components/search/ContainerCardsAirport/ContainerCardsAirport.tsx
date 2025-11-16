"use client";
import {  useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSearchAirportQuert } from '@/modules/airports/presentation/hooks';

import { Error, Loader, Pagination } from '@/modules/shared/components';
import { CardAirport } from '../CardAirport/CardAirport';

export function ContainerCardsAirport() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const offset = searchParams.get('offset') || '0';

  const limit = searchParams.get('limit') || '10';  const offsetNumber = useMemo(() => {
    const parsed = Number(offset);
    return Number.isNaN(parsed) ? 0 : parsed;
  }, [offset]);

  const limitNumber = useMemo(() => {
    const parsed = Number(limit);
    return Number.isNaN(parsed) ? 10 : parsed;
  }, [limit]); 

  const queryAirport = useSearchAirportQuert({search: query, offset: offsetNumber, limit: limitNumber});

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

  if(airports.length === 0) return (
    <div className='flex justify-center items-center'>
      <p className='font-bold text-3xl'>
        No se encontraron aeropuertos para: &quot;{query}&quot;
      </p>
    </div>
  )


  return (
    <main className='flex flex-col gap-5'>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {
          airports.map((airport)=>(
            <CardAirport key={airport.id} airport={airport}/>
          ))
        }
      </section>
      <section className='flex justify-center'>
        <Pagination offset={offsetNumber} limit={limitNumber} total={Number(queryAirport.data?.data?.pagination.total)}/>
      </section>
    </main>
  )
}
