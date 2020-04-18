import styled from 'styled-components';
import Colors from '../../colors';

export enum ButtonVariant {
  PRIMARY,
  PRIMARY_SMALL,
  OUTLINE,
  DARK,
}

type StyleProps = {
  variant: ButtonVariant;
};

const bigSizeStyle = `
  height: 54px;
  font-size: 16px;
  line-height: 20px;
  padding: 0 30px;
`;

const primaryBaseStyle = `
  border: 2px solid ${Colors.ORANGE_DARK};
  background-color: ${Colors.ORANGE_DARK};
  color: ${Colors.WHITE};
  &:hover {
    background: transparent;
    color: ${Colors.ORANGE_DARK};
  }
`;

export const ButtonWrapper = styled.button<StyleProps>`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  ${(props: StyleProps) => {
    switch (props.variant) {
      case ButtonVariant.PRIMARY:
        return `
          ${bigSizeStyle}
          ${primaryBaseStyle}
        `;
      case ButtonVariant.PRIMARY_SMALL:
        return `
          height: 37px;
          font-size: 14px;
          line-height: 17px;
          padding: 0 20px;
          ${primaryBaseStyle}
        `;
      case ButtonVariant.OUTLINE:
        return `
          ${bigSizeStyle}
          border: 2px solid ${Colors.ORANGE_DARK};
          background: transparent;
          color: ${Colors.ORANGE_DARK};
          &:hover {
            background-color: ${Colors.ORANGE_DARK};
            color: ${Colors.WHITE};
          }
        `;
      case ButtonVariant.DARK:
        return `
          height: 43px;
          font-weight: bold;
          font-size: 14px;
          line-height: 17px;
          border: none;
          background-color: ${Colors.DARK_BUTTON};
          color: ${Colors.WHITE};
          padding: 0 30px;
          &:hover {
            background-color: ${Colors.ORANGE_DARK};
            color: ${Colors.WHITE};
          }
        `;
    }
  }};
  outline: none;
  @media (max-width: 576px) {
    width: 100%;
  }
`;