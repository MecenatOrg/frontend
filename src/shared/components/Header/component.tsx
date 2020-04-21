import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { LogoBlackIcon } from 'shared/icons';

import Navigation from './Navigation';
import SearchBar from './SearchBar';
import Menu from './Menu';

import { HeaderWrapper, LogoWrapper, HeaderElementsWrapper } from './styles';

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
          <Col>
            <HeaderElementsWrapper>
              <LogoWrapper href="#">
                <LogoBlackIcon mobile={true} />
                <LogoBlackIcon mobile={false} />
              </LogoWrapper>
              <Navigation onToggle={onToggleHandler} isOpenMenu={isOpenMenu} />
            </HeaderElementsWrapper>
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
