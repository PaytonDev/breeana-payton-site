import { TextField } from "@radix-ui/themes";

type MaskedFieldProps = {
  onChange: (value: string) => void;
  value: string;
  type: string;
  placeholder: string;
};

export const MaskedField = ({ onChange, value, type, placeholder, ...props }: MaskedFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <TextField.Root>
      <TextField.Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...props}
      />
    </TextField.Root>
  );
};
