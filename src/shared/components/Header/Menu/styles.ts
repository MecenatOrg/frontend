import styled from 'styled-components';
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
  background: ${Colors.BLUE_DARK};
  color: ${Colors.WHITE};
  ${({ isOpenMenu }: StyleProps): string => `transform: translateX(${isOpenMenu ? '0' : '-100%'})`};
  transition: all 0.2s;
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
`;
