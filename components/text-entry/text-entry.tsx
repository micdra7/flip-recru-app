import { Flex, Text } from '@chakra-ui/react';

type TTextEntryProps = {
  name: string;
  value: string;
};

export const TextEntry = ({ name, value }: TTextEntryProps): JSX.Element => (
  <Flex w="100%" mb={1} flexFlow="row nowrap" justifyContent="space-between">
    <Text fontWeight="bold" textTransform="capitalize">
      {name}
    </Text>
    <Text textAlign="right">{value}</Text>
  </Flex>
);
