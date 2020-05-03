import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { LogoWhiteIcon, BoxIcon } from 'shared/icons';
import { FooterWrapper, LogoWrapper, CopyrightWrapper, Copyright } from './styles';

import FooterList from './FooterList';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <Container>
        <LogoWrapper>
          <LogoWhiteIcon />
        </LogoWrapper>
        <FooterList />
        <CopyrightWrapper>
          <Copyright>{t('footer.COPYRIGHT')}</Copyright>
          <BoxIcon />
        </CopyrightWrapper>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
