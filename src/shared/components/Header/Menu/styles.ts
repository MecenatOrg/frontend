import styled from 'styled-components';
import media from 'shared/media-types';
import Colors from 'shared/colors';

type StyleProps = {
  isOpenMenu: boolean;
};

export const MenuWrapper = styled.div<StyleProps>`
  display: block;
  position: absolute;
  padding: 40px 0 70px;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  background: ${Colors.BLUE_NAVY};
  color: ${Colors.WHITE};
  ${({ isOpenMenu }: StyleProps): string => `transform: translateX(${isOpenMenu ? '0' : '-100%'})`};
  transition: transform 0.2s;
  ${media.mobileMax} {
    top: 62px;
  }
  ${media.tabletMMax} {
    padding: 0;
    position: fixed;
    top: 80px;
    bottom: 0;
    overflow: auto;
    .container {
      max-width: 100%;
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export const MenuListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  nav {
    max-width: 300px;
    width: 100%;
    padding-right: 20px;
    strong {
      font-weight: bold;
      font-size: 18px;
      line-height: 36px;
      ${media.tabletMMax} {
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
      }
    }
    ul {
      margin-top: 15px;
      margin-bottom: 30px;
      a {
        color: ${Colors.WHITE};
        font-size: 16px;
        line-height: 34px;
      }
    }
  }
  ${media.tabletMMax} {
    nav {
      max-width: 100%;
      padding-right: 0;
      border-bottom: 1px solid ${Colors.BLUE_NAVY_LIGHT};
      strong {
        ${media.tabletMMax} {
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }
      }
      ul {
        ${media.tabletMMax} {
          padding: 10px 20px;
          margin: 0;
          background: ${Colors.BLUE_NAVY_LIGHT};
          li {
            padding: 10px 20px;
          }
        }
      }
    }
  }
`;
