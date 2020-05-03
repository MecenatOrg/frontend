export type MenuItem = {
  name: string;
  link: string;
  id?: number;
};

export type MenuList = {
  id?: number;
  heading: string;
  list: MenuItem[];
};

export type SelectProps = {
  placeholder: string;
  options: SelectItem[];
  onSelect: (value: string) => void;
};

export type SelectItem = {
  value: string;
  name: string;
};
