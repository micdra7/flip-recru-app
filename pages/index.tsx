import { Center, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { ColorModeSwitcher } from '../components/color-mode-switcher/color-mode-switcher';
import { PageHeader } from '../components/page-header/page-header';
import { PlanetList } from '../components/planet-list/planet-list';
import { SearchInput } from '../components/search-input/search-input';

const Home: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <Center w="100%" p={8}>
      <Head>
        <title>Star Wars Navigation System</title>
        <meta
          name="description"
          content="A navigation system allowing Stormtroopers to navigate between solar systems."
        />
      </Head>

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
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <PlanetList searchQuery={searchQuery} />
      </Flex>
    </Center>
  );
};

export default Home;
