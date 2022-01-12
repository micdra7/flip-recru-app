import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { BackButton } from '../../components/back-button/back-button';
import { Layout } from '../../components/layout/layout';
import { Loader } from '../../components/loader/loader';
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
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  if (planetError) {
    return <span>Could not load</span>;
  }

  return (
    <Layout>
      <Head>
        <title>{planet?.data.name}</title>
        <meta
          name="description"
          content={`Detailed information about planet ${planet?.data.name}`}
        />
      </Head>

      <BackButton />
      <SinglePlanet planet={planet?.data} />
    </Layout>
  );
};

export default Planet;
