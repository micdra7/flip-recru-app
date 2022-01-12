import { Heading, useColorModeValue } from '@chakra-ui/react';

type TPageHeaderProps = {
  text: string;
  color?: string;
};

export const PageHeader = ({ text, color }: TPageHeaderProps): JSX.Element => {
  const filter = useColorModeValue('brightness(90%)', undefined);

  return (
    <Heading size="2xl" color={color ?? 'initial'} w="100%" filter={filter}>
      {text}
    </Heading>
  );
};
