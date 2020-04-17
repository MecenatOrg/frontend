import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { LogoBlack } from '../../icons';

import { MenuListItem } from './types';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

import { HeaderWrapper, LogoWrapper } from './styles';

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
          <Col xs={5} sm={3}>
            <LogoWrapper href="#">
              <LogoBlack mobile={true} />
              <LogoBlack mobile={false} />
            </LogoWrapper>
          </Col>
          <Col xs={7} sm={9}>
            <Navigation onToggle={onToggleHandler} menuList={menuList} />
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
