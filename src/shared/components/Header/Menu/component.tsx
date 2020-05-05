import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { MenuList } from 'shared/types';
import MenuListItem from './MenuListItem';

import { MenuWrapper, MenuListWrapper } from './styles';

type MenuProps = {
  isOpenMenu: boolean;
};

const Menu: React.FC<MenuProps> = ({ isOpenMenu }: MenuProps) => {
  const { t } = useTranslation();

  const menuLists: Array<MenuList> = [
    {
      id: Math.random(),
      heading: t('CATEGORIES'),
      list: [
        { name: t('EDUCATION'), link: '/', id: Math.random() },
        { name: t('CHILDREN'), link: '/', id: Math.random() },
        { name: t('ECOLOGY'), link: '/', id: Math.random() },
        { name: t('WAR'), link: '/', id: Math.random() },
        { name: t('MEDICINE'), link: '/', id: Math.random() },
        { name: t('ART'), link: '/', id: Math.random() },
      ],
    },
    {
      id: Math.random(),
      heading: t('PROJECT'),
      list: [
        { name: t('FIND_PROJECT'), link: '/', id: Math.random() },
        { name: t('ADD_PROJECT'), link: '/', id: Math.random() },
        { name: t('PROJECT_SELECTION_CRITERIA'), link: '/', id: Math.random() },
      ],
    },
    {
      id: Math.random(),
      heading: t('ABOUT_US'),
      list: [
        { name: t('HOW_IT_WORKS'), link: '/', id: Math.random() },
        { name: t('ADVICES'), link: '/', id: Math.random() },
        { name: t('CASES'), link: '/', id: Math.random() },
        { name: t('CONTACTS'), link: '/', id: Math.random() },
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
