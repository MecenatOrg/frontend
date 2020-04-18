import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { LogoBlack } from 'shared/icons';

import Navigation from './Navigation';
import SearchBar from './SearchBar';
import Menu from './Menu';

import { HeaderWrapper, LogoWrapper } from './styles';

const Header: React.FC = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const onToggleHandler = (type: string): void => {
    switch (type) {
      case 'search':
        setIsOpenSearch(!isOpenSearch);
        break;
      case 'menu':
        setIsOpenMenu(!isOpenMenu);
        break;
    }
  };

  return (
    <HeaderWrapper isOpenMenu={isOpenMenu}>
      <SearchBar isOpenSearch={isOpenSearch} onToggle={onToggleHandler} />
      <Menu isOpenMenu={isOpenMenu} />
      <Container>
        <Row>
          <Col xs={5} sm={3}>
            <LogoWrapper href="#">
              <LogoBlack mobile={true} />
              <LogoBlack mobile={false} />
            </LogoWrapper>
          </Col>
          <Col xs={7} sm={9}>
            <Navigation onToggle={onToggleHandler} isOpenMenu={isOpenMenu} />
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
