import React from 'react';
import { ButtonWrapper, ButtonVariant } from './styles';

type ButtonProps = {
  variant: ButtonVariant;
  title: string;
};

const Button: React.FC<ButtonProps> = ({ variant, title }: ButtonProps) => (
  <ButtonWrapper variant={variant}>{title}</ButtonWrapper>
);
export default Button;
