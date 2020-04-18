import React from 'react';
import { Container } from 'react-bootstrap';

import { MenuWrapper, MenuListWrapper } from './styles';

type menuProps = {
  isOpenMenu: boolean;
};

type MenuItem = {
  name: string;
  link: string;
};

type MenuList = {
  heading: string;
  list: MenuItem[];
};

const Menu: React.FC<menuProps> = ({ isOpenMenu }: menuProps) => {
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
          {MenuLists.map((MenuList: MenuList, index: number) => {
            return (
              <nav key={index}>
                <strong>{MenuList.heading}</strong>
                <ul>
                  {MenuList.list.map((item: MenuItem, i: number) => {
                    return (
                      <li key={i}>
                        <a href={item.link}>{item.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            );
          })}
        </MenuListWrapper>
      </Container>
    </MenuWrapper>
  );
};

export default Menu;
