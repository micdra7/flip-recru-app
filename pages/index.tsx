import { Center, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useState } from 'react';
import { ColorModeSwitcher } from '../components/color-mode-switcher/color-mode-switcher';
import { PageHeader } from '../components/page-header/page-header';
import { PlanetList } from '../components/planet-list/planet-list';
import { SearchInput } from '../components/search-input/search-input';

const Home: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <Center w="100%" p={8}>
      <ColorModeSwitcher />
      <Flex
        w="100%"
        maxW="1440px"
        flexFlow="row wrap"
        justifyContent="center"
        rowGap={5}
        textAlign={['center', null, null, 'left']}
      >
        <PageHeader text="Star Wars Navigation System" color="#ffe300" />
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <PlanetList searchQuery={searchQuery} />
      </Flex>
    </Center>
  );
};

export default Home;
