import { Box, Center, Heading, useColorModeValue } from '@chakra-ui/react';
import { CSSObject } from '@emotion/react';

type TPlanetCardProps = {
  name: string;
  onClick: () => void;
};

const hoverFocusStyles: CSSObject = {
  cursor: 'pointer',
  filter: 'brightness(85%)',
};

export const PlanetCard = ({
  name,
  onClick,
}: TPlanetCardProps): JSX.Element => {
  const backgroundColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Center
      as="button"
      rounded="md"
      p={8}
      onClick={onClick}
      bgColor={backgroundColor}
      minH="140px"
      _focus={hoverFocusStyles}
      _hover={hoverFocusStyles}
    >
      <Heading size="xl">{name}</Heading>
    </Center>
  );
};
