import { Icon, IconButton } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

export const BackButton = () => {
  const router = useRouter();

  return (
    <IconButton
      pos="fixed"
      top={3}
      left={3}
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      icon={<Icon as={FaArrowLeft} />}
      onClick={() => router.back()}
      aria-label="Go back"
    />
  );
};
