import React, { useState } from 'react';

import { MenuList, MenuItem } from 'shared/types';
import { ArrowIcon } from 'shared/icons';

import { ArrowIconWrapper, ListWrapper } from './styles';

type MenuListItem = {
  list: MenuList;
};

const MenuListItem: React.FC<MenuListItem> = ({ list }: MenuListItem) => {
  const [isOpenList, setIsOpenList] = useState(false);

  return (
    <nav>
      <strong
        onClick={(): void => {
          setIsOpenList(!isOpenList);
        }}
      >
        {list.heading}
        <ArrowIconWrapper isOpenList={isOpenList}>
          <ArrowIcon />
        </ArrowIconWrapper>
      </strong>
      <ListWrapper isOpenList={isOpenList}>
        {list.list.map((item: MenuItem) => (
          <li key={item.id}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ListWrapper>
    </nav>
  );
};

export default MenuListItem;
