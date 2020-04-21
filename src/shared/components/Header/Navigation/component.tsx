import React from 'react';

import { Button } from 'shared/components';
import { ButtonVariant } from 'shared/components/Button/styles';

import { SearchIcon } from 'shared/icons';
import { Navigation, ToggleMenu, SearchButton, ButtonWrapper } from './styles';

export type NavListItem = {
  name: string;
  link: string;
};

type NavigationProps = {
  isOpenMenu: boolean;
  onToggle(type: string): void;
};

const Header: React.FC<NavigationProps> = ({ onToggle, isOpenMenu }: NavigationProps) => {
  const navList: NavListItem[] = [
    { name: 'Знайти проекти', link: '#' },
    { name: 'Додати проект', link: '/link2' },
  ];
  return (
    <Navigation>
      <ul>
        <li>
          <SearchButton
            onClick={(): void => {
              onToggle('search');
            }}
          >
            <SearchIcon />
            Пошук
          </SearchButton>
        </li>
        {navList.map(item => (
          <li key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      <ButtonWrapper>
        <Button title="Допомогти" variant={ButtonVariant.PRIMARY_SMALL} />
      </ButtonWrapper>
      <ToggleMenu
        isOpenMenu={isOpenMenu}
        onClick={(): void => {
          onToggle('menu');
        }}
      />
    </Navigation>
  );
};

export default Header;
