import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { LogoBlack } from '../../icons';

import { MenuListItem } from './types';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

import { HeaderWrapper } from './styles';

const Header: React.FC = () => {
  const menuList: MenuListItem[] = [
    { name: 'Знайти проекти', link: '#' },
    { name: 'Додати проект', link: '/link2' },
  ];
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const onToggleHandler = (type: string): void => {
    if (type === 'search') {
      setIsOpenSearch(!isOpenSearch);
    }
  };

  return (
    <HeaderWrapper>
      <SearchBar isOpenSearch={isOpenSearch} onToggle={onToggleHandler} />
      <Container>
        <Row>
          <Col>
            <LogoBlack />
          </Col>
          <Col>
            <Navigation onToggle={onToggleHandler} menuList={menuList} />
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
