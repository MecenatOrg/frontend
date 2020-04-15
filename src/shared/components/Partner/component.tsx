import React from 'react';
import { PartnerWrapper, ImageElement } from './styles';

type PartnerProps = {
  imageSrc: string;
  imageAlt: string;
};

const Partner: React.FC<PartnerProps> = ({ imageSrc, imageAlt }: PartnerProps) => {
  return (
    <PartnerWrapper>
      <ImageElement src={imageSrc} alt={imageAlt} />
    </PartnerWrapper>
  );
};

export default Partner;
