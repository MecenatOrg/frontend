import styled from 'styled-components';
import media from 'shared/media-types';
import Colors from 'shared/colors';

type StyleProps = {
  isOpenMenu: boolean;
};

export const HeaderWrapper = styled.header<StyleProps>`
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  ${({ isOpenMenu }: StyleProps): string => `background: ${isOpenMenu ? `${Colors.WHITE}` : 'transparent'};`};
  transition: all 0.3s;
  z-index: 2;
  ${media.tabletMMax} {
    background: ${Colors.WHITE};
  }
  ${media.mobileMax} {
    height: 62px;
  }
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

export const HeaderElementsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
