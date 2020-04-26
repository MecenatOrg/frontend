import React from 'react';
import { H1 } from 'shared/Typography';
import { BigBoxIcon } from 'shared/icons';

import { HeroWrapper, HeroTextWrapper, BigBoxIconWrapper } from './styles';

const Hero: React.FC = () => (
  <HeroWrapper>
    <HeroTextWrapper>
      <H1>Соціальні та благодійні ініціативи України</H1>
      <p>Ви можете знайти проект, який підходить вам ідеально, і дізнатися, як ваша компанія може підтримати його.</p>
    </HeroTextWrapper>
    <BigBoxIconWrapper>
      <BigBoxIcon />
    </BigBoxIconWrapper>
  </HeroWrapper>
);
export default Hero;
