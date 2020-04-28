import styled from 'styled-components';
import { Media } from 'react-bootstrap';

import { Size } from 'config/configEnums';
import Colors from 'shared/colors';
import media from 'shared/media-types';

type CartWrapperProps = {
  size: Size;
};
type CartSubHeaderProps = {
  textColor?: Colors;
};

export const CartWrapper = styled.div<CartWrapperProps>`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  padding-left: 20px;

  div:first-child {
    ${({ size }: CartWrapperProps): string => (size === Size.LARGE ? 'margin-right: 60px' : '')};
  }
  div:nth-last-child(-n + 2) {
    ${({ size }: CartWrapperProps): string => (size === Size.LARGE ? `margin-bottom: 0` : '')};
  }

  svg {
    position: absolute;
    z-index: -1;
    left: -20px;
    ${({ size }: CartWrapperProps): string => (size !== Size.LARGE ? 'height: 100%' : '')};
    ${({ size }: CartWrapperProps): string => (size === Size.LARGE ? 'top: 20px' : '')};
  }

  img {
    width: 100%;
  }

  & > :last-child > h3 {
    ${({ size }: CartWrapperProps): string => (size === Size.MEDIUM || Size.SMALL ? 'font-size: 22px' : '')};
    ${({ size }: CartWrapperProps): string => (size === Size.MEDIUM || Size.SMALL ? 'line-height: 30px' : '')};
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
      ${({ size }: CartWrapperProps): string => (size === Size.LARGE ? 'margin-right: 0' : '')};
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
  background: ${Colors.LIGHT_GREY_BACKGROUND};
`;

export const CartContent = styled(Media.Body)`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const CartSubHeader = styled.span<CartSubHeaderProps>`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  ${({ textColor }: CartSubHeaderProps): string => `color: ${textColor ? textColor : Colors.BLACK};`};
`;
