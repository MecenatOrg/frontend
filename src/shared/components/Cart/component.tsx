import React from 'react';

// import { } from 'module';
import { Oval, ParallelogramOvalToLeft, RectangleOvalToRight } from 'shared/shapes';
import { CartWrapper, ImageWrapper, CartContent } from './styles';

type CartProps = {
  editorial: boolean;
  imgName?: string;
  imgURL: string;
  caption: string;
  title: string;
  text: string;
};

const Cart: React.FC<CartProps> = ({ editorial, imgName = 'photo', imgURL, caption, title, text }: CartProps) => {
  return (
    <CartWrapper editorial={editorial}>
      <ImageWrapper editorial={editorial}>{imgURL && <img src={imgURL} alt={imgName} />}</ImageWrapper>
      <Oval />
      <ParallelogramOvalToLeft />
      <RectangleOvalToRight />
      <CartContent>
        <span>{caption}</span>
        <h3>{title}</h3>
        <span>{text}</span>
      </CartContent>
    </CartWrapper>
  );
};

export default Cart;
