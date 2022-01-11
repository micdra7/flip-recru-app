import { Center, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { ColorModeSwitcher } from '../../components/color-mode-switcher/color-mode-switcher';
import { PageHeader } from '../../components/page-header/page-header';

const Planet: NextPage = () => {
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
      </Flex>
    </Center>
  );
};

export default Planet;
