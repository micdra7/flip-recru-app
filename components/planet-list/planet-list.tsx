import { SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { PlanetsService } from '../../services/planets.service';
import { TPlanet } from '../../services/types';
import { Loader } from '../loader/loader';
import { PlanetCard } from '../planet-card/planet-card';

export const PlanetList = () => {
  const [nextPageUrl, setNextPageUrl] = useState<string>('');
  const {
    data: planets,
    isLoading: planetsLoading,
    isSuccess: planetsLoaded,
    isError: planetsError,
  } = useQuery('planets', () => PlanetsService.getPlanets(nextPageUrl), {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (planetsLoaded && planets) {
      setNextPageUrl(planets.data.next);
    }
  }, [planetsLoaded, planets]);

  if (planetsLoading) {
    return <Loader />;
  }

  if (planetsError) {
    return <span>Could not load</span>;
  }

  return (
    <SimpleGrid columns={[1, 1, 2, 3, 5]} gap={4} w="100%">
      {planets?.data.results.map(({ name }: TPlanet) => (
        <PlanetCard key={name} name={name} onClick={() => {}} />
      ))}
    </SimpleGrid>
  );
};
