import React from 'react';
import { H1 } from 'shared/Typography';
import { BigBoxIcon } from 'shared/icons';
import { Button } from 'shared/components';

import { BigBoxIconWrapper, HeroTextWrapper, HeroWrapper } from './styles';
import { ButtonVariant } from 'shared/components/Button/component';

const Hero: React.FC = () => (
  <HeroWrapper>
    <HeroTextWrapper>
      <H1>Соціальні та благодійні ініціативи України</H1>
      <p>Ви можете знайти проект, який підходить вам ідеально, і дізнатися, як ваша компанія може підтримати його.</p>
      <Button variant={ButtonVariant.DARK} title="Хочу допомогти" />
    </HeroTextWrapper>
    <BigBoxIconWrapper>
      <BigBoxIcon />
    </BigBoxIconWrapper>
  </HeroWrapper>
);
export default Hero;
