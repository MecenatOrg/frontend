import React from 'react';
import Container from 'react-bootstrap/Container';
import { PartnerWrapper, ImageElement } from './styles';

type PartnerProps = {
  imageSrc?: string;
  imageAlt?: string;
};

const Partner: React.FC<PartnerProps> = (props: PartnerProps) => {
  return (
    <PartnerWrapper>
      <ImageElement src={props.imageSrc} alt={props.imageAlt}></ImageElement>
    </PartnerWrapper>
  );
};

export default Partner;
