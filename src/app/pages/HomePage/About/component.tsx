import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import Colors from 'shared/colors';
import { H2, Text } from 'shared/Typography';
import { Size } from 'config/configEnums';

import { Button } from 'shared/components';
import { ButtonVariant } from 'shared/components/Button/component';

import { AboutImg } from 'shared/images';
import { RectangleOvalToRight } from 'shared/shapes';
import { ProjectsVerifiedIcon, OverlayShapeCIcon } from 'shared/icons';

import { AboutWrapper, AboutImgWrapper, AboutTextWrapper, ProjectsVerifiedWrapper } from './styles';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AboutWrapper>
      <AboutImgWrapper>
        <img src={AboutImg} alt="" />
        <RectangleOvalToRight className="svg--rectangle" size={Size.EXTRA_LARGE} fill={Colors.GREEN_LIGHT} />
        <ProjectsVerifiedWrapper>
          <ProjectsVerifiedIcon />
        </ProjectsVerifiedWrapper>
      </AboutImgWrapper>
      <AboutTextWrapper>
        <H2>
          <Trans i18nKey="about.HEADING">
            Mеценат -
            <span>
              це
              <OverlayShapeCIcon />
            </span>
            допомога
          </Trans>
        </H2>
        <Text>{t('about.TEXT')}</Text>
        <Button variant={ButtonVariant.PRIMARY} title={t('WANT_TO_HELP')} />
      </AboutTextWrapper>
    </AboutWrapper>
  );
};

export default About;
