import React from 'react';
import { ButtonWrapper } from './styles';

export enum ButtonVariant {
  PRIMARY,
  PRIMARY_SMALL,
  OUTLINE,
  DARK,
}

type ButtonProps = {
  variant: ButtonVariant;
  title: string;
};

const Button: React.FC<ButtonProps> = ({ variant, title }: ButtonProps) => (
  <ButtonWrapper variant={variant}>{title}</ButtonWrapper>
);
export default Button;
