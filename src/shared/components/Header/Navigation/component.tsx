import React from 'react';
import { useTranslation } from 'react-i18next';

import { MenuItem } from 'shared/types';
import { Button } from 'shared/components';
import { ButtonVariant } from 'shared/components/Button/component';
import { ToggleHandlerType } from 'shared/components/Header/component';

import { SearchIcon } from 'shared/icons';
import { Navigation, ToggleMenu, SearchButton, ButtonWrapper } from './styles';

type NavigationProps = {
  isOpenMenu: boolean;
  onToggle(type: ToggleHandlerType): void;
};

const Header: React.FC<NavigationProps> = ({ onToggle, isOpenMenu }: NavigationProps) => {
  const { t } = useTranslation();

  const navList: MenuItem[] = [
    { name: t('FIND_PROJECT'), link: '/find-project', id: Math.random() },
    { name: t('ADD_PROJECT'), link: '/', id: Math.random() },
  ];
  return (
    <Navigation>
      <SearchButton
        onClick={(): void => {
          onToggle(ToggleHandlerType.SEARCH);
        }}
      >
        <SearchIcon />
        {t('SEARCH')}
      </SearchButton>
      <ul>
        {navList.map(item => (
          <li key={item.id}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      <ButtonWrapper>
        <Button title={t('HELP')} variant={ButtonVariant.PRIMARY_SMALL} />
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
