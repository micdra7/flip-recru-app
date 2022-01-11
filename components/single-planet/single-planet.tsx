import {
  Center,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { convertNameFromSnakeCaseToNormalText } from '../../utils/helper';
import { TPlanet } from '../../utils/types';

const selectedAttributes = [
  'climate',
  'diameter',
  'gravity',
  'orbital_period',
  'population',
  'rotation_period',
  'surface_water',
  'terrain',
];

type TSinglePlanetProps = {
  planet: TPlanet;
};

export const SinglePlanet = ({ planet }: TSinglePlanetProps): JSX.Element => {
  const backgroundColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Flex
      rounded="md"
      p={8}
      bgColor={backgroundColor}
      w="100%"
      maxW="620px"
      flexFlow="row wrap"
    >
      <Heading size="lg" w="100%" mb={3}>
        Planet: {planet.name}
      </Heading>
      {Object.keys(planet)
        .filter(key => selectedAttributes.includes(key))
        .map(key => (
          <Text key={key} w="100%" textTransform="capitalize" mb={1}>
            <strong>{`${convertNameFromSnakeCaseToNormalText(key)}: `}</strong>
            {(planet as unknown as Record<string, string>)[key]}
          </Text>
        ))}
    </Flex>
  );
};
