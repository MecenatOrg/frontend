import React from 'react';
import { Navigation, ToggleMenu, SearchButton } from './styles';
import { MenuListItem } from '../interfaces';
import { SearchIcon } from '../../../icons';

type NavigationProps = {
  menuList: MenuListItem[];
  onToggle(type: string): void;
};

const Header: React.FC<NavigationProps> = (props: NavigationProps) => {
  const onToggleSearchBar = (): void => {
    props.onToggle('search');
  };

  return (
    <Navigation>
      <ul>
        <li>
          <SearchButton onClick={onToggleSearchBar}>
            <SearchIcon />
            Пошук
          </SearchButton>
        </li>
        {props.menuList.map(item => {
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
