import React from 'react';

import { SearchIcon } from 'shared/icons';
import { NavListItem } from '../types';
import { Navigation, ToggleMenu, SearchButton } from './styles';

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
