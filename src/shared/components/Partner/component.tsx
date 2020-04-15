import React from 'react';
import { PartnerWrapper, ImageElement } from './styles';

type PartnerProps = {
  imageSrc: string;
  imageAlt: string;
};

const Partner: React.FC<PartnerProps> = (props: PartnerProps) => {
  return (
    <PartnerWrapper>
      <ImageElement src={props.imageSrc} alt={props.imageAlt} />
    </PartnerWrapper>
  );
};

export default Partner;
