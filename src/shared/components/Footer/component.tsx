import React from 'react';
import { Container } from 'react-bootstrap';
import { LogoWhiteIcon, BoxIcon } from 'shared/icons';
import { FooterWrapper, LogoWrapper, CopyrightWrapper, Copyright } from './styles';

import FooterList from './FooterList';

const Footer: React.FC = () => (
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

export default Footer;
