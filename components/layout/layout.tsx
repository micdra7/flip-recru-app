import { Center, Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../color-mode-switcher/color-mode-switcher';
import { PageHeader } from '../page-header/page-header';

type TLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export const Layout = ({ children }: TLayoutProps): JSX.Element => (
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
      {children}
    </Flex>
  </Center>
);
