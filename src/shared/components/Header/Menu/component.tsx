import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

import { MenuList } from 'shared/types';
import MenuListItem from './MenuListItem';

import { MenuWrapper, MenuListWrapper } from './styles';

type MenuProps = {
  isOpenMenu: boolean;
};

const Menu: React.FC<MenuProps> = ({ isOpenMenu }: MenuProps) => {
  const menuLists: Array<MenuList> = [
    {
      id: Math.random(),
      heading: 'Категорії',
      list: [
        { name: 'Освіта', link: '', id: Math.random() },
        { name: 'Діти', link: '/', id: Math.random() },
        { name: 'Екологія', link: '/', id: Math.random() },
        { name: 'Війна', link: '/', id: Math.random() },
        { name: 'Медицина', link: '/', id: Math.random() },
        { name: 'Мистецтво', link: '/', id: Math.random() },
      ],
    },
    {
      id: Math.random(),
      heading: 'Проект',
      list: [
        { name: 'Знайти проект', link: '', id: Math.random() },
        { name: 'Додати проект', link: '/', id: Math.random() },
        { name: 'Критерії відбору проекту', link: '/', id: Math.random() },
      ],
    },
    {
      id: Math.random(),
      heading: 'Про нас',
      list: [
        { name: 'Як це працює', link: '', id: Math.random() },
        { name: 'Поради', link: '/', id: Math.random() },
        { name: 'Кейси', link: '/', id: Math.random() },
        { name: 'Контакти', link: '/', id: Math.random() },
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
          {menuLists.map((menuList: MenuList) => (
            <MenuListItem list={menuList} key={menuList.id} />
          ))}
        </MenuListWrapper>
      </Container>
    </MenuWrapper>
  );
};

export default Menu;
