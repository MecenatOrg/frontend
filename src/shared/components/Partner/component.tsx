import React from 'react';
import Container from 'react-bootstrap/Container';
import { PartnerWrapper, ImageElement } from './styles';

type PartnerProps = {
  imageSrc?: string;
  imageAlt?: string;
};

const Partner: React.FC<PartnerProps> = (props: PartnerProps) => {
  return (
    <PartnerWrapper className="d-flex align-items-center justify-content-center">
      <ImageElement src={props.imageSrc} alt={props.imageAlt}></ImageElement>
    </PartnerWrapper>
  );
};

export default Partner;
