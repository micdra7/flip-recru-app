import { Button, ButtonGroup, Icon, IconButton } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type TPaginationProps = {
  onPreviousPageClick?: () => void;
  onNextPageClick?: () => void;
};

export const Pagination = ({
  onPreviousPageClick,
  onNextPageClick,
}: TPaginationProps): JSX.Element => (
  <ButtonGroup variant="solid" spacing={2} w="100%" justifyContent="end">
    <IconButton
      aria-label="Previous page"
      icon={<Icon as={FaChevronLeft} />}
      onClick={onPreviousPageClick}
      disabled={!onPreviousPageClick}
    />
    <IconButton
      aria-label="Next page"
      icon={<Icon as={FaChevronRight} />}
      onClick={onNextPageClick}
      disabled={!onNextPageClick}
    />
  </ButtonGroup>
);
