import React from 'react';
import { FooterWrapper, LogoWrapper, CopyrightWrapper, Copyright } from './styles';
import { Container } from 'react-bootstrap';
import { LogoWhiteIcon, BoxIcon } from '../../icons';

import FooterList from './FooterList';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <LogoWrapper>
          <LogoWhiteIcon />
        </LogoWrapper>
        <FooterList />
        <CopyrightWrapper>
          <Copyright>(c) 2019. МЕЦЕНАТ</Copyright>
          <BoxIcon />
        </CopyrightWrapper>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
