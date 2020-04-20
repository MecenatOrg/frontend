import React from 'react';

import { SearchIcon } from '../../../icons';
import { MenuListItem } from '../types';
import { Navigation, ToggleMenu, SearchButton } from './styles';

type NavigationProps = {
  menuList: MenuListItem[];
  onToggle(type: string): void;
};

const Header: React.FC<NavigationProps> = ({ menuList, onToggle }: NavigationProps) => {
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
        {menuList.map(item => {
          return (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
      </ul>
      <ToggleMenu />
    </Navigation>
  );
};

export default Header;
