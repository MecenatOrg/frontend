import React from 'react';
import { useTranslation } from 'react-i18next';

import { H1 } from 'shared/Typography';
import { BigBoxIcon } from 'shared/icons';
import { Button } from 'shared/components';

import { BigBoxIconWrapper, HeroTextWrapper, HeroWrapper } from './styles';
import { ButtonVariant } from 'shared/components/Button/component';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HeroWrapper>
      <HeroTextWrapper>
        <H1>{t('hero.HEADING')}</H1>
        <p>{t('hero.DESCRIPTION')}</p>
        <Button variant={ButtonVariant.PRIMARY} title={t('WANT_TO_HELP')} />
      </HeroTextWrapper>
      <BigBoxIconWrapper>
        <BigBoxIcon />
      </BigBoxIconWrapper>
    </HeroWrapper>
  );
};
export default Hero;
