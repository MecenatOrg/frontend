import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { LogoBlackIcon } from 'shared/icons';

import Navigation from './Navigation';
import SearchBar from './SearchBar';
import Menu from './Menu';

import { HeaderWrapper, LogoWrapper, HeaderElementsWrapper } from './styles';

export enum ToggleHandlerType {
  MENU,
  SEARCH,
}

const Header: React.FC = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const onToggleHandler = (type: ToggleHandlerType): void => {
    switch (type) {
      case ToggleHandlerType.MENU:
        setIsOpenMenu(!isOpenMenu);
        break;
      case ToggleHandlerType.SEARCH:
        setIsOpenSearch(!isOpenSearch);
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
