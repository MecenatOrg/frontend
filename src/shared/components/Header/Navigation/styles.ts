import styled from 'styled-components';
import Colors from 'shared/colors';

type StyleProps = {
  isOpenMenu: boolean;
};

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ul {
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
      display: none;
    }
    li {
      display: flex;
      align-items: center;
      margin-right: 40px;
      line-height: 1.2;
    }
    a {
      font-size: 14px;
      color: ${Colors.BLACK};
      text-decoration: none;
    }
    svg {
      margin-right: 10px;
    }
  }
`;

export const SearchButton = styled.button`
  font-size: 14px;
  padding: 0;
  border: 0;
  background-color: transparent;
  color: ${Colors.BLACK};
  font-weight: 500;
`;

export const ToggleMenu = styled.button<StyleProps>`
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  border: 0;
  &::after,
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background-color: ${Colors.BLACK};
    transition: all 0.25s ease-out;
  }
  &::after {
    ${({ isOpenMenu }: StyleProps): string =>
      `top: ${isOpenMenu ? '11px' : '6px'}; transform: rotate(${isOpenMenu ? '-45deg' : '0'})`};
  }
  &::before {
    ${({ isOpenMenu }: StyleProps): string =>
      `bottom: ${isOpenMenu ? '11px' : '6px'}; transform: rotate(${isOpenMenu ? '45deg' : '0'})`};
  }
`;

export const ButtonWrapper = styled.div`
  margin-right: 40px;
`;
