import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

import { MenuList } from 'shared/types';
import MenuListItem from './MenuListItem';

import { MenuWrapper, MenuListWrapper } from './styles';

type MenuProps = {
  isOpenMenu: boolean;
};

const Menu: React.FC<MenuProps> = ({ isOpenMenu }: MenuProps) => {
  const MenuLists: Array<MenuList> = [
    {
      heading: 'Категорії',
      list: [
        { name: 'Освіта', link: '' },
        { name: 'Діти', link: '/' },
        { name: 'Екологія', link: '/' },
        { name: 'Війна', link: '/' },
        { name: 'Медицина', link: '/' },
        { name: 'Мистецтво', link: '/' },
      ],
    },
    {
      heading: 'Проект',
      list: [
        { name: 'Знайти проект', link: '' },
        { name: 'Додати проект', link: '/' },
        { name: 'Критерії відбору проекту', link: '/' },
      ],
    },
    {
      heading: 'Про нас',
      list: [
        { name: 'Як це працює', link: '' },
        { name: 'Поради', link: '/' },
        { name: 'Кейси', link: '/' },
        { name: 'Контакти', link: '/' },
      ],
    },
  ];

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpenMenu]);

  return (
    <MenuWrapper isOpenMenu={isOpenMenu}>
      <Container>
        <MenuListWrapper>
          {MenuLists.map((MenuList: MenuList, index: number) => (
            <MenuListItem list={MenuList} key={index} />
          ))}
        </MenuListWrapper>
      </Container>
    </MenuWrapper>
  );
};

export default Menu;
