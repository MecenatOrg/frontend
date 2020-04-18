import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  z-index: 2;
`;

export const LogoWrapper = styled.a`
  .logo-mobile {
    display: none;
    @media (max-width: 767px) {
      display: block;
    }
  }
  .logo-desktop {
    display: block;
    @media (max-width: 767px) {
      display: none;
    }
  }
`;
