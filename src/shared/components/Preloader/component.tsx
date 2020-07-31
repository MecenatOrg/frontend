import React from 'react';
import { PreloaderWrapper, BoxIconWrapper } from './styles';
import { BoxIcon } from 'shared/icons';

const Partner: React.FC = () => {
  return (
    <PreloaderWrapper>
      <BoxIconWrapper>
        <BoxIcon></BoxIcon>
      </BoxIconWrapper>
    </PreloaderWrapper>
  );
};

export default Partner;
