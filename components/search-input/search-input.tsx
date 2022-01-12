import { Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

type TSearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchInput = ({ value, onChange }: TSearchInputProps) => (
  <InputGroup>
    <Input
      placeholder="Enter planet name..."
      value={value}
      onChange={event => onChange(event.target.value)}
      minLength={3}
    />
    <InputRightElement>
      <Icon as={FaSearch} />
    </InputRightElement>
  </InputGroup>
);
