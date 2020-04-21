import React from 'react';
import { Container } from 'react-bootstrap';

import { MenuItem, MenuList } from 'shared/types';

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

  return (
    <MenuWrapper isOpenMenu={isOpenMenu}>
      <Container>
        <MenuListWrapper>
          {MenuLists.map((MenuList: MenuList, index: number) => (
            <nav key={index}>
              <strong>{MenuList.heading}</strong>
              <ul>
                {MenuList.list.map((item: MenuItem, i: number) => (
                  <li key={i}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </MenuListWrapper>
      </Container>
    </MenuWrapper>
  );
};

export default Menu;
