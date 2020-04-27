export type SelectProps = {
  placeholder: string;
  options: SelectItem[];
  onSelect: (value: string) => void;
};

export type SelectItem = {
  value: string;
  name: string;
};
