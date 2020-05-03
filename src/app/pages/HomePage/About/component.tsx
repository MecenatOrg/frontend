import React from 'react';

import { H2, Text } from 'shared/Typography';
import { AboutImg } from 'shared/images';
import { Button } from 'shared/components';
import { ButtonVariant } from 'shared/components/Button/component';
import { ProjectsVerified } from 'shared/icons';

import { AboutWrapper, AboutImgWrapper, AboutTextWrapper, ProjectsVerifiedWrapper } from './styles';

const About: React.FC = () => (
  <AboutWrapper>
    <AboutImgWrapper>
      <img src={AboutImg} alt="" />
      <ProjectsVerifiedWrapper>
        <ProjectsVerified />
      </ProjectsVerifiedWrapper>
    </AboutImgWrapper>
    <AboutTextWrapper>
      <H2>
        Mеценат - <span>це</span> допомога
      </H2>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum eu fugiat nulla pariatur.
      </Text>
      <Button variant={ButtonVariant.PRIMARY} title="Хочу допомогти" />
    </AboutTextWrapper>
  </AboutWrapper>
);

export default About;
