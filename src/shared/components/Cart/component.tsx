import React from 'react';

import { If } from 'react-if';
import { H3, Text } from 'shared/Typography';
import { Oval, ParallelogramOvalToLeft, RectangleOvalToRight } from 'shared/shapes';
import { CartWrapper, ImageWrapper, CartContent, CartSubHeader } from './styles';

import { Size } from 'config/configEnums';
import Colors from 'shared/colors';

type CartProps = {
  imgName?: string;
  imgURL: string;
  caption: string;
  title: string;
  text?: string;
  size: Size;
  textColor?: Colors;
};

const Cart: React.FC<CartProps> = (props: CartProps) => {
  const { imgName = 'photo', imgURL, caption, title, text, size, textColor } = props;
  const _random = Math.floor(Math.random() * 4) + 1;

  return (
    <CartWrapper size={size}>
      <ImageWrapper>
        <If condition={_random === 1}>
          <Oval size={size} fill={Colors.PURPLE_LIGHT} />
        </If>
        <If condition={_random === 2}>
          <Oval size={size} fill={Colors.GREEN_LIGHT} />
        </If>
        <If condition={_random === 3}>
          <ParallelogramOvalToLeft size={size} />
        </If>
        <If condition={_random === 4}>
          <RectangleOvalToRight size={size} />
        </If>
        {imgURL && <img src={imgURL} alt={imgName} />}
      </ImageWrapper>
      <CartContent>
        <CartSubHeader textColor={textColor}>{caption}</CartSubHeader>
        <H3>{title}</H3>
        {text && <Text>{text}</Text>}
      </CartContent>
    </CartWrapper>
  );
};

export default Cart;
