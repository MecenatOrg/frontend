import styled from 'styled-components';
import { Media } from 'react-bootstrap';

import Colors from 'shared/colors';
import media from 'shared/media-types';

type CartWrapperProps = {
  size: 'small' | 'medium' | 'large';
};
type CartSubHeaderProps = {
  textColor?: string;
};
type CartShapesProps = CartWrapperProps & {
  violet?: boolean;
};

export const CartWrapper = styled.div<CartWrapperProps>`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  padding-left: 20px;

  div:first-child {
    ${({ size }): string => (size === 'large' ? 'margin-right: 60px' : '')};
  }
  div:nth-last-child(-n + 2) {
    ${({ size }): string => (size === 'large' ? `margin-bottom: 0` : '')};
  }

  svg {
    position: absolute;
    z-index: -1;
    left: -20px;
    ${({ size }): string => (size !== 'large' ? 'height: 100%' : '')};
    ${({ size }): string => (size === 'large' ? 'top: 20px' : '')};
  }

  img {
    width: 100%;
  }

  & > :last-child > h3 {
    ${({ size }): string => (size === 'medium' || 'small' ? 'font-size: 22px' : '')};
    ${({ size }): string => (size === 'medium' || 'small' ? 'line-height: 30px' : '')};
  }

  &:hover {
    cursor: pointer;
    & > :last-child > h3 {
      text-decoration: underline;
    }
  }

  ${media.tabletLMax} {
    div:nth-last-child(-n + 2) {
      width: 100%;
      max-width: 100%;
      margin-bottom: 24px;
    }
    div:first-child {
      ${({ size }): string => (size === 'large' ? 'margin-right: 0' : '')};
    }
    svg {
      top: 0%;
      height: 100%;
    }
  }
`;

export const ImageWrapper = styled(Media)`
  position: relative;
  z-index: 10;
  margin-bottom: 24px;
  background: #e5e5e5;
`;

export const CartContent = styled(Media.Body)`
  & > :not(:last-child) {
    margin-bottom: 12px;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CartSubHeader = styled.span<CartSubHeaderProps>`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  ${({ textColor }): string => `color: ${textColor ? textColor : Colors.BLACK};`};
`;
