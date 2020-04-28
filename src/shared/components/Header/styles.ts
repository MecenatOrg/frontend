import styled from 'styled-components';
import media from 'shared/media-types';

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
    ${media.tabletMax} {
      display: block;
    }
  }
  .logo-desktop {
    display: block;
    ${media.tabletMax} {
      display: none;
    }
  }
`;
