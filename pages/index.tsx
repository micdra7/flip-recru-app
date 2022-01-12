import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { Layout } from '../components/layout/layout';
import { PlanetList } from '../components/planet-list/planet-list';
import { SearchInput } from '../components/search-input/search-input';

const Home: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <Layout>
      <Head>
        <title>Star Wars Navigation System</title>
        <meta
          name="description"
          content="A navigation system allowing Stormtroopers to navigate between solar systems."
        />
      </Head>

      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      <PlanetList searchQuery={searchQuery} />
    </Layout>
  );
};

export default Home;
