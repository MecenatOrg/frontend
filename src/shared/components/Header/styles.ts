import styled from 'styled-components';
import media from 'shared/media-types';

type StyleProps = {
  isOpenMenu: boolean;
};

export const HeaderWrapper = styled.header<StyleProps>`
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  ${({ isOpenMenu }: StyleProps): string => `background: ${isOpenMenu ? '#fff' : 'transparent'};`};
  transition: all 0.3s;
  z-index: 2;
`;

export const LogoWrapper = styled.a`
  .logo-mobile {
    display: none;
    ${media.tabletMMax} {
      display: block;
    }
  }
  .logo-desktop {
    display: block;
    ${media.tabletMMax} {
      display: none;
    }
  }
`;
