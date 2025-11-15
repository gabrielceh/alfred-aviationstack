import { airportsContainer } from "@/core/di";
import { useQuery } from "@tanstack/react-query";

interface SearchAirportQuery {
  search: string;
  offset: number;
  limit: number;
}

export function useSearchAirportQuert({ search, offset, limit }: SearchAirportQuery) {
  const query = useQuery({
    queryKey: ['seacrh-airport', {search, offset, limit}],
    queryFn: () => airportsContainer.usecases.searchAirport.execute(search, {offset, limit}),
    enabled: !!search,
    staleTime: 1000 * 60 * 10,
  })

  return query;
}
