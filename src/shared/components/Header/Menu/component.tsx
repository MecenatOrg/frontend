import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

import { MenuList } from 'shared/types';
import MenuListItem from './MenuListItem';

import { routes } from 'Router/path';

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
        { name: 'Освіта', link: routes.education, id: Math.random() },
        { name: 'Діти', link: routes.children, id: Math.random() },
        { name: 'Екологія', link: routes.ecology, id: Math.random() },
        { name: 'Війна', link: routes.war, id: Math.random() },
        { name: 'Медицина', link: routes.healthcare, id: Math.random() },
        { name: 'Мистецтво', link: routes.art, id: Math.random() },
      ],
    },
    {
      id: Math.random(),
      heading: 'Проект',
      list: [
        { name: 'Знайти проект', link: routes.projects, id: Math.random() },
        { name: 'Додати проект', link: routes.project, id: Math.random() },
        { name: 'Критерії відбору проекту', link: routes.projectSelectionCriteria, id: Math.random() },
      ],
    },
    {
      id: Math.random(),
      heading: 'Про нас',
      list: [
        { name: 'Як це працює', link: routes.howItWorks, id: Math.random() },
        { name: 'Поради', link: routes.advices, id: Math.random() },
        { name: 'Кейси', link: routes.cases, id: Math.random() },
        { name: 'Контакти', link: routes.contacts, id: Math.random() },
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
