import styled from 'styled-components';

type StyleProps = {
  isOpenMenu: boolean;
};

export const MenuWrapper = styled.div<StyleProps>`
  display: block;
  position: absolute;
  padding: 40px 0 70px 0;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  background: #2e63b3;
  color: #f2f2f2;
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
        color: #f2f2f2;
        font-size: 16px;
        line-height: 34px;
      }
    }
  }
`;
