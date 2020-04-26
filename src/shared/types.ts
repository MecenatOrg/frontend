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
