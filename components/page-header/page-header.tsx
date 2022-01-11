import { Heading } from '@chakra-ui/react';

type TPageHeaderProps = {
  text: string;
  color?: string;
};

export const PageHeader = ({ text, color }: TPageHeaderProps): JSX.Element => (
  <Heading size="2xl" color={color ?? 'initial'} w="100%">
    {text}
  </Heading>
);
