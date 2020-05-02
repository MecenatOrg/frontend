import React from 'react';

import { MenuItem } from 'shared/types';
import { Button } from 'shared/components';
import { ButtonVariant } from 'shared/components/Button/component';
import { ToggleHandlerType } from 'shared/components/Header/component';
import { Link } from 'react-router-dom';

import { SearchIcon } from 'shared/icons';
import { Navigation, ToggleMenu, SearchButton, ButtonWrapper } from './styles';

import { routes } from 'Router/path';

type NavigationProps = {
  isOpenMenu: boolean;
  onToggle(type: ToggleHandlerType): void;
};

const Header: React.FC<NavigationProps> = ({ onToggle, isOpenMenu }: NavigationProps) => {
  const navList: MenuItem[] = [
    { name: 'Знайти проекти', link: routes.projects, id: Math.random() },
    { name: 'Додати проект', link: routes.project, id: Math.random() },
  ];
  return (
    <Navigation>
      <SearchButton
        onClick={(): void => {
          onToggle(ToggleHandlerType.SEARCH);
        }}
      >
        <SearchIcon />
        Пошук
      </SearchButton>
      <ul>
        {navList.map(item => (
          <li key={item.id}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <ButtonWrapper>
        <Button title="Допомогти" variant={ButtonVariant.PRIMARY_SMALL} />
      </ButtonWrapper>
      <ToggleMenu
        isOpenMenu={isOpenMenu}
        onClick={(): void => {
          onToggle(ToggleHandlerType.MENU);
        }}
      />
    </Navigation>
  );
};

export default Header;
