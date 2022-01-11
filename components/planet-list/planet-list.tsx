import { SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { PlanetsService } from '../../services/planets.service';
import { TPlanet } from '../../services/types';
import { Loader } from '../loader/loader';
import { Pagination } from '../pagination/pagination';
import { PlanetCard } from '../planet-card/planet-card';

export const PlanetList = () => {
  const [nextPageUrl, setNextPageUrl] = useState<string>('');
  const {
    data: planets,
    isLoading: planetsLoading,
    isError: planetsError,
  } = useQuery(
    ['planets', nextPageUrl],
    () => PlanetsService.getPlanets(nextPageUrl),
    {
      refetchOnWindowFocus: false,
    },
  );

  const onPaginationClick = (nextPage: boolean) => {
    setNextPageUrl(nextPage ? planets?.data.next : planets?.data.previous);
  };

  if (planetsLoading) {
    return <Loader />;
  }

  if (planetsError) {
    return <span>Could not load</span>;
  }

  return (
    <>
      <SimpleGrid columns={[1, 1, 2, 3, 5]} gap={4} w="100%">
        {planets?.data.results.map(({ name }: TPlanet) => (
          <PlanetCard key={name} name={name} onClick={() => {}} />
        ))}
      </SimpleGrid>
      <Pagination
        onPreviousPageClick={
          planets?.data.previous && (() => onPaginationClick(false))
        }
        onNextPageClick={planets?.data.next && (() => onPaginationClick(true))}
      />
    </>
  );
};
