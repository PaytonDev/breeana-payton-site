import { TextField, Flex } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

type DebouncedSearchFieldProps = {
  onChange: (value: string) => void;
  value: string;
};

export const DebouncedSearchField = ({ onChange, value, ...props }: DebouncedSearchFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Flex align="center" gap="2">
      <TextField.Root>
        <TextField.Slot>
          <MagnifyingGlassIcon />
        </TextField.Slot>
        <TextField.Input
          type="search"
          placeholder="Search"
          value={value}
          onChange={handleChange}
          {...props}
        />
      </TextField.Root>
    </Flex>
  );
};
