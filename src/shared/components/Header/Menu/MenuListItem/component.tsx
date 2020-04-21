import React, { useState } from 'react';

import { MenuList, MenuItem } from 'shared/types';
import { ArrowIcon } from 'shared/icons';

import { ArrowIconWrapper, ListWrapper } from './styles';

type MenuListItem = {
  list: MenuList;
};

const MenuListItem: React.FC<MenuListItem> = ({ list }: MenuListItem) => {
  const [isOpenList, setIsOpenList] = useState(false);

  const onToggleHandler = (): void => {
    setIsOpenList(!isOpenList);
  };

  return (
    <nav>
      <strong
        onClick={(): void => {
          onToggleHandler();
        }}
      >
        {list.heading}
        <ArrowIconWrapper isOpenList={isOpenList}>
          <ArrowIcon />
        </ArrowIconWrapper>
      </strong>
      <ListWrapper isOpenList={isOpenList}>
        {list.list.map((item: MenuItem, i: number) => (
          <li key={i}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ListWrapper>
    </nav>
  );
};

export default MenuListItem;
