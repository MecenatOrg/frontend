import styled from 'styled-components';
import Colors from 'shared/colors';
import MediaTypes from 'shared/media-types';

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ul {
    display: flex;
    align-items: center;
    @media (max-width: ${MediaTypes.TABLET}) {
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

export const ToggleMenu = styled.button`
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
  }
  &::after {
    top: 6px;
  }
  &::before {
    bottom: 6px;
  }
`;
