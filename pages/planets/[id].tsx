import { Center, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { ColorModeSwitcher } from '../../components/color-mode-switcher/color-mode-switcher';
import { Loader } from '../../components/loader/loader';
import { PageHeader } from '../../components/page-header/page-header';
import { SinglePlanet } from '../../components/single-planet/single-planet';
import { PlanetsService } from '../../services/planets.service';

const Planet: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: planet,
    isLoading: planetLoading,
    isError: planetError,
  } = useQuery(
    `planets/${id}`,
    () => PlanetsService.getSinglePlanet(+(id ?? 0)),
    { refetchOnWindowFocus: false, enabled: !!id },
  );

  if (planetLoading) {
    return <Loader />;
  }

  if (planetError) {
    return <span>Could not load</span>;
  }

  return (
    <Center w="100%" p={8}>
      <ColorModeSwitcher />
      <Flex
        w="100%"
        maxW="1440px"
        flexFlow="row wrap"
        justifyContent="center"
        rowGap={5}
        textAlign="center"
      >
        <PageHeader text="Star Wars Navigation System" color="#ffe300" />
        <SinglePlanet planet={planet?.data} />
      </Flex>
    </Center>
  );
};

export default Planet;
