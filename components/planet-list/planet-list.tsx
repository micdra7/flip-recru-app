import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { PlanetsService } from '../../services/planets.service';
import { TPlanet } from '../../services/types';
import { Loader } from '../loader/loader';

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
    <div>
      {planets?.data.results.map((planet: TPlanet) => (
        <p key={planet.name}>{planet.name}</p>
      ))}
    </div>
  );
};
