import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ColorModeSwitcher } from '../components/color-mode-switcher/color-mode-switcher';
import { PageHeader } from '../components/page-header/page-header';

const Home: NextPage = () => {
  return (
    <Box p={8} w="100%">
      <ColorModeSwitcher />
      <Flex w="100%" flexFlow="row wrap" justifyContent="center">
        <PageHeader text="Star Wars Navigation System" color="#ffe300" />
      </Flex>
    </Box>
  );
};

export default Home;
